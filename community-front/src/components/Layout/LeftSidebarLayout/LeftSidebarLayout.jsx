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

function LeftSideBarLayout({ userProfile }) {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const pathname = useLocation().pathname;
    const [profile, setProfile] = useState({
        avatar: localStorage.getItem("profileAvatar") || "/default-avatar.png",
        username: localStorage.getItem("profileUsername") || "username",
        displayName: localStorage.getItem("profileDisplayName") || "사용자 이름"
    });
    const [showPostBox, setShowPostBox] = useState(false);

    const MENUS = [
        {
            id: 1,
            path: "/",
            name: "홈",
            icon: {
                off: <GoHome />,
                on: <GoHomeFill />,
            }
        },
        {
            id: 2,
            path: "/twitter/exlore",
            name: "검색",
            icon: {
                off: <IoSearchOutline />,
                on: <IoSearchSharp />,
            }
        },
        {
            id: 3,
            path: "/notifications",
            name: "알림",
            icon: {
                off: <GoBell />,
                on: <GoBellFill />,
            }
        },
        {
            id: 4,
            path: "/messages",
            name: "메세지",
            icon: {
                off: <FaRegEnvelope />,
                on: <FaEnvelope />,
            }
        },
        {
            id: 5,
            path: "/bookmarks",
            name: "북마크",
            icon: {
                off: <IoBookmarkOutline />,
                on: <IoBookmark />,
            }
        },
        {
            id: 6,
            path: "/jobs",
            name: "채용",
            icon: {
                off: <LuBriefcaseBusiness />,
                on: <LuBriefcaseBusiness />,
            }
        },
        {
            id: 7,
            path: "/communities",
            name: "커뮤니티",
            icon: {
                off: <HiOutlineUsers />,
                on: <HiUsers />,
            }
        },
        {
            id: 8,
            path: "/premium",
            name: "프리미엄",
            icon: {
                off: <BsTwitterX />,
                on: <BsTwitterX />,
            }
        },
        {
            id: 9,
            path: "/profile",
            name: "프로필",
            icon: {
                off: <LuUserRound />,
                on: <HiUser />,
            }
        },
        {
            id: 10,
            path: "/more",
            name: "더보기",
            icon: {
                off: <CiCircleMore />,
                on: <CgMoreO />,
            }
        },
    ];

    const loadProfile = () => {
        const avatar = localStorage.getItem("profileAvatar") || "";
        const username = localStorage.getItem("profileUsername") || "username";
        const displayName = localStorage.getItem("profileDisplayName") || "사용자 이름";
        setProfile({ avatar, username, displayName });
    };

    useEffect(() => {
        loadProfile(); // 첫 로드 시 불러오기

        // 다른 탭/컴포넌트에서 변경 시 반영
        const handleStorageChange = (e) => {
            if (["profileAvatar", "profileUsername", "profileDisplayName"].includes(e.key)) {
                loadProfile();
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const toggleMenu = () => setShowMenu(!showMenu);

    const handleLogout = (e) => {
        e.stopPropagation();
        try {
            localStorage.removeItem("AccessToken");
            navigate("/auth/login");
        } catch (error) {
            console.error("로그아웃 중 오류 발생:", error);
            alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
        }
    };

    const handlePostButtonClick = () => setShowPostBox(!showPostBox);

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

            <button css={s.postButton} onClick={handlePostButtonClick}>
                <FaPenSquare size={20} />
                <span>Post</span>
            </button>

            <div css={s.profileBox}>
                <img
                    css={s.profileImage}
                    src={profile.avatar || "/default-avatar.png"}
                    alt="avatar"
                />

                <div css={s.profileInfo}>
                    <div css={s.profileName}>{profile.displayName}</div>
                    <div css={s.profileId}>@{profile.username}</div>
                </div>

                <div css={s.profileMore} onClick={toggleMenu}>
                    <FiMoreHorizontal />

                    {showMenu && (
                        <div css={s.dropdownMenu}>
                            <button css={s.dropdownButton} onClick={handleLogout}>
                                로그아웃
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LeftSideBarLayout;