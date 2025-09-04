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
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const pathname = useLocation().pathname;
    const [avatar, setAvatar] = useState("");
    const [showPostBox, setShowPostBox] = useState(false);

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

    // 페이지 로드 시 localStorage에서 이미지 불러오기
    useEffect(() => {
        const savedAvatar = localStorage.getItem("sidebarAvatar");
        if (savedAvatar) setAvatar(savedAvatar);
    }, []);

    // 기존 handleAvatarChange 수정 (localStorage 저장 추가)
    const handleAvatarChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    const resultStr = reader.result.toString();
                    setAvatar(resultStr);
                    localStorage.setItem("sidebarAvatar", resultStr); // 저장
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLogout = (e) => {
        e.stopPropagation(); // 이벤트 버블 방지
        try {
            localStorage.removeItem("AccessToken");
            setIsLoggedIn(false);
            navigate("/auth/login");
        } catch (error) {
            console.error("로그아웃 중 오류 발생:", error);
            alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
        }
    };

    const handlePostButtonClick = () => {
        setShowPostBox(!showPostBox); // 토글
    };


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
                <label htmlFor="avatarUpload">
                    <img
                        css={s.profileImage}
                        src={avatar || "/default-avatar.png"}
                        alt="avatar"
                    />
                </label>

                <input
                    id="avatarUpload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleAvatarChange}
                />

                <div css={s.profileInfo}>
                    <div css={s.profileName}>사용자 이름</div>
                    <div css={s.profileId}>@username</div>
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