"use client"
import Image from "next/image";
import logo from "./../../assets/logo.png"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const { data: user } = authClient.useSession();
  const router = useRouter()
  const userImage = user?.user?.image;
  const handleSignOut = async () => {

    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin"); // redirect to login page
        },
      },
    });
  }
  return (
    <div className="w-full max-w-[1400px] ">
      <div className="flex justify-between items-center">
        <div>
          <Image src={logo} height={200} width={200} alt="logo"></Image>
        </div>
        <div>
          <ul className="flex items-center gap-10 justify-between">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ideas">Ideas</Link></li>
            <li><Link href="/add-ideas">Add Ideas</Link></li>
            <li><Link href="/my-ideas">My Ideas</Link></li>
            <li><Link href="/my-interactions">My Interactions</Link></li>
            <li>
              {user
                ?
                <div className="flex items-center gap-6">
                  {/* <div className="w-10 h-10 overflow-hidden rounded-full">
                    <Image
                      src={userImage}
                      height={40}
                      width={40}
                      alt="user profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div> */}
                  <button className="btn btn-error" onClick={handleSignOut}>Sign Out</button>

                </div>
                :
                <button >
                  <Link href="/signin">Sign In</Link>
                </button>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;