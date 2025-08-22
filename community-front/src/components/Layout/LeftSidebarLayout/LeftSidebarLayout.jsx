/** @jsxImportSource @emotion/react */
import * as s from './styles';
import { GoBell, GoBellFill, GoHome, GoHomeFill } from "react-icons/go";
import { LuMessageCircleMore} from "react-icons/lu";
import { AiFillMessage } from "react-icons/ai";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdAddBox, MdOutlineAddBox } from "react-icons/md";
import Swal from 'sweetalert2';
import { FaCompass, FaPinterest, FaRegCompass } from 'react-icons/fa';
import { useQueryClient } from '@tanstack/react-query';


function LeftSideBarLayout(props) {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const location = useLocation();
    const [nowPath, setNowPath] = useState("");
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
            path: "/Compass",
            name: "탐색",
            icon: {
                off: <FaRegCompass />,
                on: <FaCompass />,
            }
        },
        {
            id: 3,
            path: "/Made",
            name: "만들다",
            icon: {
                off: <MdOutlineAddBox />,
                on: <MdAddBox />,
            }
        },
        {
            id: 4,
            path: "/Update",
            name: "업데이트",
            icon: {
                off: <GoBell />,
                on: <GoBellFill />,
            }
        },
        {
            id: 5,
            path: "/Message",
            name: "메세지",
            icon: {
                off: <LuMessageCircleMore />,
                on: <AiFillMessage />,
            }
        },
    ];
    
    useEffect(() => {
        setNowPath(location.pathname);
    }, [location.pathname]);

    const handleLogoutOnClick = async () => {
        const { isConfirmed } = await Swal.fire({
            title: "로그아웃 하시겠습니까?",
            showConfirmButton: true,
            confirmButtonText: "예",
            showCancelButton: true,
            cancelButtonText: "아니오",
        });

        if (isConfirmed) {
            localStorage.removeItem("AccessToken");
            await queryClient.invalidateQueries({
                queryKey: ["principal"],
            });
            navigate("/auth/login");
        }
    }

    return (
        <div css={s.layout}>
            <header>
                <div css={s.iconBox}>
                    <FaPinterest />
                </div>
            </header>
            <main>
                {
                    MENUS.map(menu => {
                        if (menu.path.startsWith("/admin") && !roles.includes("ROLE_ADMIN")) {
                            return <></>;
                        }
                        if (menu.name === "home") {
                            if (nowPath === menu.path) {
                                return <Link key={menu.id} to={menu.path} css={s.iconBox}>
                                    {menu.icon.on}
                                </Link>
                            } else {
                                return <Link key={menu.id} to={menu.path} css={s.iconBox}>
                                    {menu.icon.off}
                                </Link>
                            }
                        }
                        if (nowPath.startsWith(menu.path)) {
                            return <Link key={menu.id} to={menu.path} css={s.iconBox}>
                                {menu.icon.on}
                                </Link>
                        } else {
                            return <Link key={menu.id} to={menu.path} css={s.iconBox}>
                                {menu.icon.off}
                                </Link>
                        }
                    })
                }
            </main>
            <footer>
                <div css={s.iconBox}>
                    <IoSettingsOutline />
                </div>
            </footer>
        </div>
    );
}

export default LeftSideBarLayout;