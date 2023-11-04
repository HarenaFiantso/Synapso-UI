"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faUserGroup, faNetworkWired, faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import facebookLogo from "../assets/facebookLogo.png";

export default function NavbarComponent() {
  const notificationIcon = (
    <div className="relative inline-flex cursor-pointer items-center p-3 text-xl font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <FontAwesomeIcon icon={faBell} />
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full top-1 right-1 dark:border-gray-900">1</div>
    </div>
  );

  const messageIcon = (
    <div className="relative inline-flex cursor-pointer items-center p-3 text-xl font-medium text-center focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <FontAwesomeIcon icon={faMessage} />
      <span className="sr-only">Notifications</span>
      <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full top-1 right-1 dark:border-gray-900">1</div>
    </div>
  );

  return (
    <Navbar>
      <Navbar.Brand href="#">
        <img
          src={facebookLogo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Synapso
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
        {messageIcon}
        {notificationIcon}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://scontent.ftnr4-2.fna.fbcdn.net/v/t39.30808-6/391758655_892709545523539_7131545026706485083_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE3A_djzKitzfDBh9Ly-S3l4CvrDEMdvfLgK-sMQx298ln4yEHQIdGQvJNhBxLGV6r6UJFgkjBq7zQHTofeO16C&_nc_ohc=y3Cxgfl3YVkAX-7JRUw&_nc_zt=23&_nc_ht=scontent.ftnr4-2.fna&oh=00_AfC7z1DNp9JS1YkIg6hkm6uQaChH9Zy-wLVKylGOGQaXBw&oe=654B8262"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Fiantso Harena</span>
            <span className="block truncate text-sm font-medium">
              fiantsorav@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Settings & Privacy</Dropdown.Item>
          <Dropdown.Item>Help & Support</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-darkGrey">
        <Navbar.Link href="#" active className="active: text-midBlue hover:text-midBlue">
          <FontAwesomeIcon icon={faHome} /> Home
        </Navbar.Link>
        <Navbar.Link href="#">
          <FontAwesomeIcon icon={faUser} /> Profile
        </Navbar.Link>
        <Navbar.Link href="#">
          <FontAwesomeIcon icon={faUserGroup} /> Group
        </Navbar.Link>
        <Navbar.Link href="#">
          <FontAwesomeIcon icon={faNetworkWired} /> Live
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
