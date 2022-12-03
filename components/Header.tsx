import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { selectBasketItems } from "../redux/basketSlice";
import { useSelector } from "react-redux";

type Props = {};

const Header = (props: Props) => {
  const session = false;
  const items = useSelector(selectBasketItems);
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src="https://rb.gy/vsvv2o"
              alt="logo"
              style={{ objectFit: "contain" }}
              width={50}
              height={50}
            />
          </div>
        </Link>
      </div>

      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>

      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              {items.length}
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>

        {session ? (
          <Image
            src={
              // session.user?.image ||
              "https://www.gravatar.com/avatar/000000000000000000000000000000000000000000?d=mp&f=y"
            }
            alt="user"
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
          />
        ) : (
          <UserIcon className="headerIcon" />
        )}
      </div>
    </header>
  );
};

export default Header;
