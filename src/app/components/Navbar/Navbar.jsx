"use client"
import Image from "next/image";
import logo from "./../../assets/logo.png"
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const { data: user } = authClient.useSession();
  const router = useRouter()
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
    <div className="flex justify-between items-center container mx-auto">
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
              <div>
                <button variant="secondary" onClick={handleSignOut}>Sign Out</button>

              </div>
              :
              <button variant="secondary">
                <Link href="/signin">Sign In</Link>
              </button>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;