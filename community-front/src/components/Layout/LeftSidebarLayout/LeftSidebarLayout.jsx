/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { GoBell, GoBellFill, GoHome, GoHomeFill } from "react-icons/go";
import { LuBriefcaseBusiness, LuUserRound} from "react-icons/lu";
import { IoBookmark, IoBookmarkOutline, IoSearchOutline, IoSearchSharp, IoSettingsOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEnvelope, FaPenSquare, FaRegEnvelope } from 'react-icons/fa';
import { useQueryClient } from '@tanstack/react-query';
import { HiOutlineUsers, HiUser, HiUsers } from 'react-icons/hi2';
import { BsTwitterX } from 'react-icons/bs';
import { FiMoreHorizontal } from "react-icons/fi";

function LeftSideBarLayout(props) {
    // const navigate = useNavigate();
    // const queryClient = useQueryClient();
    // const [nowPath, setNowPath] = useState("");
    const pathname = useLocation().pathname;
    const MENUS = [
        {
            id: 1,
            path: "/",
            name: "Home",
            icon: {
                off: <GoHome />,
                on: <GoHomeFill />,
            }
        },
        {
            id: 2,
            path: "/twitter/exlore",
            name: "Explore",
            icon: {
                off: <IoSearchOutline />,
                on: <IoSearchSharp />,
            }
        },
        {
            id: 3,
            path: "/notifications",
            name: "Notifications",
            icon: {
                off: <GoBell />,
                on: <GoBellFill />,
            }
        },
        {
            id: 4,
            path: "/messages",
            name: "Message",
            icon: {
                off: <FaRegEnvelope />,
                on: <FaEnvelope />,
            }
        },
        {
            id: 5,
            path: "/bookmarks",
            name: "Bookmarks",
            icon: {
                off: <IoBookmarkOutline />,
                on: <IoBookmark />,
            }
        },
        {
            id: 6,
            path: "/jobs",
            name: "Jobs",
            icon: {
                off: <LuBriefcaseBusiness />,
                on: <LuBriefcaseBusiness />,
            }
        },
        {
            id: 7,
            path: "/communities",
            name: "Communities",
            icon: {
                off: <HiOutlineUsers />,
                on: <HiUsers />,
            }
        },
        {
            id: 8,
            path: "/premium",
            name: "Premium",
            icon: {
                off: <BsTwitterX />,
                on: <BsTwitterX />,
            }
        },
        {
            id: 9,
            path: "/profile",
            name: "Profile",
            icon: {
                off: <LuUserRound />,
                on: <HiUser />,
            }
        },
        {
            id: 10,
            path: "/more",
            name: "More",
            icon: {
                off: <CiCircleMore />,
                on: <CgMoreO />,
            }
        },
    ];

    return (
        <div css={s.layout}>
            <div css={s.logo}><BsTwitterX /></div>

            <nav>
                {MENUS.map((menu) => (

                    <Link to={menu.path} key={menu.id} css={s.menu}>
                        {pathname === menu.path ? menu.icon.on : menu.icon.off}
                        <span>{menu.name}</span>
                    </Link>
                ))}
            </nav>

            <button css={s.postButton}>
                <FaPenSquare size={20} />
                <span>Post</span>
            </button>

            <div css={s.profileBox}>
                <img css={s.profileImage} src="" alt="avatar" />
                <div css={s.profileInfo}>
                    <div css={s.profileName}>사용자 이름</div>
                    <div css={s.profileId}>@username</div>
                </div>
                <div css={s.profileMore}><FiMoreHorizontal /></div>
            </div>
        </div>
    );
}

export default LeftSideBarLayout;