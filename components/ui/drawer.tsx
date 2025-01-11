'use client';

import { Drawer } from 'vaul';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function VaulDrawer() {
    const router = useRouter();
  return (
    <Drawer.Root>
      <Drawer.Trigger className="relative text-black flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
       Login
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] mt-24 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div aria-hidden className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4 text-gray-900">Login into Comet Currency.</Drawer.Title>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const email = formData.get('email') as string;
                const password = formData.get('password') as string;
                
              }}
              className="space-y-4"
            >
              <label className="block">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Password</span>
                <input
                  type="password"
                  name="password"
                  className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your password"
                  required
                />
              </label>
              <div className="flex items-start justify-between">
                <div className='flex flex-col gap-1'>
                <Link
                  href="/forgot-password"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  Forgot password?
                </Link>
                <Link
                  href="/signup"
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >Don't have an account?<span className='text-[#bf9b30]'> Apply here</span></Link>
                </div>
              
                <button
                  type="submit"
                  onClick={() => {router.push('/insta-verification')}}
                  className="text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-8 py-2.5 text-center inline-flex items-center"
                >
                  Login
                </button>
               
              </div>
            </form>
            </div>
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <Drawer.Close className="text-gray-600 hover:text-gray-900">Cancel</Drawer.Close>
            
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}