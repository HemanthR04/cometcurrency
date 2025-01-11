"use client";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "axios";
import router, { useRouter } from "next/navigation";
import { RainbowButton } from "@/components/ui/rainbow-button";
// Utility function for fetching Instagram data
const fetchInstagramData = async (username: string): Promise<any> => {
  const options = {
    method: "POST",
    url: "https://rocketapi-for-instagram.p.rapidapi.com/instagram/user/get_info",
    headers: {
      "x-rapidapi-key": "8f78ade542mshafa4ac317fab713p1cbcb9jsn4cff45d952f7",
      "x-rapidapi-host": "rocketapi-for-instagram.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      username: username,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

  
// Main Component
export default function InstaVerificationPage() {
  const [instagramUsername, setInstagramUsername] = useState("");
  const [instagramData, setInstagramData] = useState<any>(null);
  const [instagramBio, setInstagramBio] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  let verified = false;
  const router = useRouter();
  const checkBioForVerification = (bio: string) => {
    setLoading(true);
    if (bio.toLowerCase().includes("#CometCreater")) {
      verified = true;
       router.push("/comet-score");
    }
    else{
      setError("Please add the hashtag #CometCreator to your bio and try again.");
      
      setLoading(false);
      toast.error("Please add the hashtag #CometCreator to your bio and try again.");
    }
  };
  const handleFetchData = async (usernameToFetch: string) => {
    if (!usernameToFetch.trim()) {
      setError("Please enter a valid username.");
      return;
    }

    setIsFetching(true);
    setError(null);
    setInstagramData(null);

    try {
      const result = await fetchInstagramData(usernameToFetch);
      setInstagramData(result);
      setInstagramBio(result.response.body.data.user.biography);
      checkBioForVerification(instagramBio);
    } catch (err) {
      setError("Failed to fetch Instagram data. Please try again later.");
    } finally {
      setIsFetching(false);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <div><Toaster/></div>
   
    <div className="p-4 w-full max-w-xl mx-auto mt-36  ">
      <h1 className="text-sm font-semibold mb-4">Verify your Instagram</h1>
      <p className="text-xs mb-4">Add the Hashtag <span className="font-bold">#CometCreator</span> to your Bio and click on verify </p>
      <input
        type="text"
        value={instagramUsername}
        onChange={(e) => setInstagramUsername(e.target.value)}
        placeholder="Enter Instagram username"
        className="p-2 w-full mb-4 text-black rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <RainbowButton
        onClick={() => handleFetchData(instagramUsername)}
        className={`p-2 w-full rounded bg-blue-600 text-white ${
          isFetching ? "cursor-not-allowed" : "hover:bg-blue-700"
        }`}
        disabled={isFetching}
      >
        {isFetching ? "Verifying..." : "Verify"}
      </RainbowButton>

     
      
    </div>
    </>
  );
}
