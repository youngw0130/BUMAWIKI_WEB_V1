import { UserContext } from 'App';
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'style/components-style/Header.scss';

const Header = () => {
    const [search, setSearch] = useState('');
    const [isLoad, setIsLoad] = useState(false);
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const navigateSearchResult = () => {
        if (search.length === 0) {
            alert('검색할 문서명을 입력해주세요!')
        } else {
            navigate(`/search/${search}`)
        }
    }
    useEffect(() => {
        if (user.id) setIsLoad(true)
    }, [user]);

    return (
        <div className='header-wrap'>
            <Link to={'/'} className='logo-wrap'>
                <img src='/images/logo.png' alt='logo' className='logo' />
            </Link>
            <div className='section-bar'>
                <Link to={'/student'} className='section-wrap'>
                    <div className='section-logo'>
                        <svg width="14" height="12" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 8C7.79113 8 8.56448 7.76541 9.22228 7.32588C9.88008 6.88635 10.3928 6.26164 10.6955 5.53074C10.9983 4.79983 11.0775 3.99556 10.9231 3.21964C10.7688 2.44372 10.3878 1.73098 9.82843 1.17157C9.26902 0.612164 8.55628 0.231202 7.78036 0.0768607C7.00444 -0.0774802 6.20017 0.00173312 5.46927 0.304484C4.73836 0.607234 4.11365 1.11992 3.67412 1.77772C3.2346 2.43552 3 3.20888 3 4C3 5.06087 3.42143 6.07828 4.17157 6.82843C4.92172 7.57857 5.93913 8 7 8ZM15 10C15.5933 10 16.1734 9.82405 16.6667 9.49441C17.1601 9.16477 17.5446 8.69623 17.7716 8.14805C17.9987 7.59987 18.0581 6.99667 17.9424 6.41473C17.8266 5.83279 17.5409 5.29824 17.1213 4.87868C16.7018 4.45912 16.1672 4.1734 15.5853 4.05765C15.0033 3.94189 14.4001 4.0013 13.8519 4.22836C13.3038 4.45543 12.8352 4.83994 12.5056 5.33329C12.1759 5.82664 12 6.40666 12 7C12 7.79565 12.3161 8.55871 12.8787 9.12132C13.4413 9.68393 14.2044 10 15 10ZM19 17C19.2652 17 19.5196 16.8946 19.7071 16.7071C19.8946 16.5196 20 16.2652 20 16C19.9992 15.0654 19.7365 14.1497 19.2416 13.3569C18.7468 12.564 18.0396 11.9258 17.2003 11.5145C16.3611 11.1032 15.4234 10.9353 14.4936 11.03C13.5638 11.1247 12.6791 11.478 11.94 12.05C10.9605 11.0744 9.71406 10.4106 8.35782 10.1424C7.00159 9.87426 5.59632 10.0137 4.31923 10.5431C3.04213 11.0726 1.95041 11.9683 1.18174 13.1174C0.413069 14.2665 0.00187019 15.6175 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H13C13.2652 18 13.5196 17.8946 13.7071 17.7071C13.8946 17.5196 14 17.2652 14 17" fill="white" />
                        </svg>
                    </div>
                    <div className='section-text'>학생</div>
                </Link>
                <Link to={'/teacher'} className='section-wrap'>
                    <div className='section-logo'>
                        <svg width="14" height="12" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.50003 12.375C6.42535 12.375 6.35066 12.3873 6.27941 12.4133C5.87441 12.5613 5.44847 12.6562 5.00004 12.6562C4.5516 12.6562 4.12567 12.5613 3.72035 12.4133C3.6491 12.3873 3.57473 12.375 3.50004 12.375C1.56067 12.375 -0.010262 14.1497 5.04836e-05 16.3343C0.00442547 17.2575 0.679111 18 1.50005 18H8.50003C9.32096 18 9.99565 17.2575 10 16.3343C10.0103 14.1497 8.4394 12.375 6.50003 12.375ZM5.00004 11.25C6.65691 11.25 8.00003 9.73898 8.00003 7.875C8.00003 6.01102 6.65691 4.5 5.00004 4.5C3.34317 4.5 2.00005 6.01102 2.00005 7.875C2.00005 9.73898 3.34317 11.25 5.00004 11.25ZM18.5 0H6.50003C5.67285 0 5.00004 0.782227 5.00004 1.7434V3.375C5.73191 3.375 6.40941 3.61336 7.00003 4.00078V2.25H18V12.375H16V10.125H12V12.375H9.61753C10.2144 12.9618 10.6525 13.7366 10.8578 14.625H18.5C19.3272 14.625 20 13.8428 20 12.8816V1.7434C20 0.782227 19.3272 0 18.5 0Z" fill="white" />
                        </svg>
                    </div>
                    <div className='section-text'>선생님</div>
                </Link>
                <Link to={'/accident'} className='section-wrap'>
                    <div className='section-logo'>
                        <svg width="14" height="12" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.59981 11.078C11.9898 11.078 13.9918 10.266 14.1128 9.205L12.9878 6.053C12.7238 6.814 11.2628 7.354 9.59981 7.354C7.93681 7.354 6.47581 6.814 6.21181 6.053L5.08781 9.205C5.20881 10.266 7.20981 11.078 9.59981 11.078ZM9.59981 4.373C10.7238 4.373 11.7668 4.025 12.0728 3.484C11.6518 2.302 11.2908 1.287 11.0618 0.648C10.9098 0.221 10.2208 0 9.59981 0C8.97881 0 8.28981 0.221 8.13781 0.648L7.12681 3.484C7.43281 4.025 8.47681 4.373 9.59981 4.373ZM18.3798 12.066L14.6248 10.552L15.0578 11.759C15.0358 13.038 12.5538 14.058 9.59981 14.058C6.64681 14.058 4.16281 13.039 4.14181 11.759L4.57481 10.552L0.819809 12.066C-0.233191 12.49 -0.278191 13.275 0.721809 13.81L7.78381 17.597C8.78181 18.132 10.4168 18.132 11.4158 17.597L18.4788 13.81C19.4778 13.275 19.4328 12.49 18.3798 12.066Z" fill="white" />
                        </svg>

                    </div>
                    <div className='section-text'>사건/사고</div>
                </Link>
                <Link to={'/club'} className='section-wrap'>
                    <div className='section-logo'>
                        <svg width="14" height="12" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 5.53846C10.7578 5.53846 11.4845 5.2467 12.0203 4.72737C12.5561 4.20804 12.8571 3.50368 12.8571 2.76923C12.8571 2.03479 12.5561 1.33042 12.0203 0.811089C11.4845 0.291757 10.7578 0 10 0C9.24224 0 8.51551 0.291757 7.97969 0.811089C7.44388 1.33042 7.14286 2.03479 7.14286 2.76923C7.14286 3.50368 7.44388 4.20804 7.97969 4.72737C8.51551 5.2467 9.24224 5.53846 10 5.53846ZM5.71429 3.11538C5.71429 3.43359 5.64962 3.74867 5.52398 4.04266C5.39835 4.33664 5.2142 4.60375 4.98205 4.82876C4.74991 5.05376 4.47431 5.23224 4.17099 5.35402C3.86768 5.47579 3.54259 5.53846 3.21429 5.53846C2.88598 5.53846 2.56089 5.47579 2.25758 5.35402C1.95426 5.23224 1.67867 5.05376 1.44652 4.82876C1.21437 4.60375 1.03022 4.33664 0.904587 4.04266C0.77895 3.74867 0.714286 3.43359 0.714286 3.11538C0.714286 2.47274 0.977678 1.85643 1.44652 1.40201C1.91536 0.947596 2.55124 0.692308 3.21429 0.692308C3.87733 0.692308 4.51321 0.947596 4.98205 1.40201C5.45089 1.85643 5.71429 2.47274 5.71429 3.11538ZM19.2857 3.11538C19.2857 3.43359 19.2211 3.74867 19.0954 4.04266C18.9698 4.33664 18.7856 4.60375 18.5535 4.82876C18.3213 5.05376 18.0457 5.23224 17.7424 5.35402C17.4391 5.47579 17.114 5.53846 16.7857 5.53846C16.4574 5.53846 16.1323 5.47579 15.829 5.35402C15.5257 5.23224 15.2501 5.05376 15.0179 4.82876C14.7858 4.60375 14.6017 4.33664 14.476 4.04266C14.3504 3.74867 14.2857 3.43359 14.2857 3.11538C14.2857 2.47274 14.5491 1.85643 15.0179 1.40201C15.4868 0.947596 16.1227 0.692308 16.7857 0.692308C17.4488 0.692308 18.0846 0.947596 18.5535 1.40201C19.0223 1.85643 19.2857 2.47274 19.2857 3.11538ZM5.26929 6.92308C4.86283 7.41382 4.64178 8.02454 4.64286 8.65385V13.8462C4.64286 14.7012 4.85571 15.5077 5.23357 16.2187C4.68919 16.4961 4.08012 16.6326 3.46534 16.6149C2.85056 16.5972 2.25092 16.4259 1.7245 16.1176C1.19808 15.8093 0.762725 15.3745 0.460598 14.8553C0.158471 14.336 -0.00018408 13.75 1.60281e-07 13.1538V8.65385C1.60281e-07 8.19482 0.188137 7.75459 0.523024 7.43001C0.85791 7.10543 1.31211 6.92308 1.78571 6.92308H5.26929ZM14.7664 16.2187C15.1559 15.4849 15.3584 14.6714 15.3571 13.8462V8.65385C15.3571 7.99892 15.1229 7.39731 14.7307 6.92308H18.2143C18.6879 6.92308 19.1421 7.10543 19.477 7.43001C19.8119 7.75459 20 8.19482 20 8.65385V13.1538C20.0002 13.75 19.8415 14.336 19.5394 14.8553C19.2373 15.3745 18.8019 15.8093 18.2755 16.1176C17.7491 16.4259 17.1494 16.5972 16.5347 16.6149C15.9199 16.6326 15.3108 16.4961 14.7664 16.2187ZM7.5 6.92308C7.0264 6.92308 6.5722 7.10543 6.23731 7.43001C5.90242 7.75459 5.71429 8.19482 5.71429 8.65385V13.8462C5.71429 14.9478 6.16582 16.0044 6.96954 16.7834C7.77327 17.5624 8.86336 18 10 18C11.1366 18 12.2267 17.5624 13.0305 16.7834C13.8342 16.0044 14.2857 14.9478 14.2857 13.8462V8.65385C14.2857 8.19482 14.0976 7.75459 13.7627 7.43001C13.4278 7.10543 12.9736 6.92308 12.5 6.92308H7.5Z" fill="white" />
                        </svg>
                    </div>
                    <div className='section-text'>동아리</div>
                </Link>
                <Link to={`/create`} className='section-wrap'>
                    <div className='section-logo'>
                        <svg width="14" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0909 0C12.5972 0 13.0828 0.221249 13.4408 0.615076C13.7989 1.0089 14 1.54305 14 2.1V3.5H12.7273V11.9C12.7273 12.457 12.5261 12.9911 12.1681 13.3849C11.8101 13.7788 11.3245 14 10.8182 14H1.90909C1.40277 14 0.917184 13.7788 0.55916 13.3849C0.201136 12.9911 0 12.457 0 11.9V10.5H10.1818V11.9C10.1818 12.0715 10.2391 12.2369 10.3426 12.3651C10.4462 12.4932 10.5889 12.575 10.7437 12.5951L10.8182 12.6C10.974 12.6 11.1245 12.537 11.241 12.4231C11.3574 12.3092 11.4319 12.1522 11.4501 11.9819L11.4545 11.9V9.1H1.27273V2.1C1.27273 1.54305 1.47386 1.0089 1.83189 0.615076C2.18991 0.221249 2.6755 0 3.18182 0H12.0909Z" fill="white" />
                        </svg>
                    </div>
                    <div className='section-text'>문서 생성</div>
                </Link>
            </div>
            <div className='search-bar'>
                <form className='search-wrap' onSubmit={(e) => { e.preventDefault() }}>
                    <input type='text'
                        className='search-input'
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <button className='search-button' onClick={navigateSearchResult}>
                        <svg width="16" height="16" viewBox="0 0 1664 1664" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_69_2)">
                                <path d="M1152 704C1152 580.667 1108.17 475.167 1020.5 387.5C932.833 299.833 827.333 256 704 256C580.667 256 475.167 299.833 387.5 387.5C299.833 475.167 256 580.667 256 704C256 827.333 299.833 932.833 387.5 1020.5C475.167 1108.17 580.667 1152 704 1152C827.333 1152 932.833 1108.17 1020.5 1020.5C1108.17 932.833 1152 827.333 1152 704ZM1664 1536C1664 1570.67 1651.33 1600.67 1626 1626C1600.67 1651.33 1570.67 1664 1536 1664C1500 1664 1470 1651.33 1446 1626L1103 1284C983.667 1366.67 850.667 1408 704 1408C608.667 1408 517.5 1389.5 430.5 1352.5C343.5 1315.5 268.5 1265.5 205.5 1202.5C142.5 1139.5 92.5 1064.5 55.5 977.5C18.5 890.5 0 799.333 0 704C0 608.667 18.5 517.5 55.5 430.5C92.5 343.5 142.5 268.5 205.5 205.5C268.5 142.5 343.5 92.5 430.5 55.5C517.5 18.5 608.667 0 704 0C799.333 0 890.5 18.5 977.5 55.5C1064.5 92.5 1139.5 142.5 1202.5 205.5C1265.5 268.5 1315.5 343.5 1352.5 430.5C1389.5 517.5 1408 608.667 1408 704C1408 850.667 1366.67 983.667 1284 1103L1627 1446C1651.67 1470.67 1664 1500.67 1664 1536Z" fill="#CCCCCC" />
                            </g>
                            <defs>
                                <clipPath id="clip0_69_2">
                                    <rect width="1664" height="1664" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </form>
                <div className='login-wrap'>
                    {isLoad ? <Link to='/mypage' className='login-text'>마이페이지</Link> : <a href='https://auth.bssm.kro.kr/oauth?clientId=75711f76&redirectURI=http://localhost:3000/oauth' className='login-text'>로그인</a>}
                </div>
            </div>
        </div>
    );
};

export default Header;