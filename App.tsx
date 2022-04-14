import React from "react";
import "./assets/scss/style.scss";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faFileLines,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";
import AppsIcon from "@mui/icons-material/Apps";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FolderIcon from "@mui/icons-material/Folder";
import BallotIcon from "@mui/icons-material/Ballot";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";
import InboxIcon from "@mui/icons-material/Inbox";

const dataChart: any = [
  {
    label: "Dung lượng kho dữ liệu",
    backgroundColor: "#FCA549",
    data: [
      {
        x: "tháng 1",
        y: 28,
      },
      {
        x: "tháng 2",
        y: 30,
      },
      {
        x: "tháng 3",
        y: 50,
      },
      {
        x: "tháng 4",
        y: 30,
      },
      {
        x: "tháng 5",
        y: 25,
      },
      {
        x: "tháng 6",
        y: 40,
      },
      {
        x: "tháng 7",
        y: 29,
      },
    ],
  },
  {
    label: "Dung lượng tài liệu cá nhân",
    background: "#217582",
    data: [
      {
        x: "tháng 1",
        y: 40,
      },
      {
        x: "tháng 2",
        y: 20,
      },
      {
        x: "tháng 3",
        y: 70,
      },
      {
        x: "tháng 4",
        y: 40,
      },
      {
        x: "tháng 5",
        y: 53,
      },
      {
        x: "tháng 6",
        y: 30,
      },
      {
        x: "tháng 7",
        y: 60,
      },
    ],
  },
];
function App() {
  return (
    <div className="App">
      <aside className="App-sidebar">
        <div className="App-sidebar-menu">
          <FontAwesomeIcon className="App-sidebar-menu-icon" icon={faBars} />
        </div>
        <div className="App-sidebar-apps">
          <AppsIcon className="App-sidebar-apps-icon"></AppsIcon>
        </div>
        <div className="App-sidebar-elements">
          <div className="elements-group selected-element home">
            <div className="element-icon-group">
              <FontAwesomeIcon
                className="home-icon icon-group"
                icon={faHouse}
              />
            </div>
          </div>
          <div className="elements-group file">
            <div className="element-icon-group">
              <FontAwesomeIcon
                className="file-icon icon-group"
                icon={faFileLines}
              />
            </div>
          </div>
          <div className="elements-group chart">
            <div className="element-icon-group">
              <FontAwesomeIcon
                className="chart-icon icon-group"
                icon={faChartPie}
              />
            </div>
          </div>
          <div className="elements-group account-tree">
            <div className="element-icon-group">
              <AccountTreeIcon className="account-tree-icon icon-group"></AccountTreeIcon>
            </div>
          </div>
        </div>
      </aside>
      <header className="App-header">
        <div className="noti-and-user-info">
          <span className="notification-group">
            <div className="notification-group-element dark-mode">
              <Brightness4Icon className="dark-mode-icon"></Brightness4Icon>
            </div>
            <div className="notification-group-element notification">
              <NotificationsIcon className="notification-icon"></NotificationsIcon>
              <div className="number-of-noti">
                <p>8</p>
              </div>
            </div>
            <div className="notification-group-element chat">
              <ChatBubbleIcon className="chat-icon"></ChatBubbleIcon>
              <div className="number-of-chat">
                <p>8</p>
              </div>
            </div>
          </span>
          <div className="user-information">
            <div className="avatar">
              <AccountCircleIcon className="avatar-icon" />
              <div className="active-status-dot"></div>
            </div>
            <div className="username-and-active-status">
              <p className="username">Nguyễn Hải Nam</p>
              <p className="active-status">Online</p>
            </div>
            <div className="check-info">
              <KeyboardArrowDownIcon className="check-info-icon"></KeyboardArrowDownIcon>
            </div>
          </div>
        </div>
      </header>
      <section className="folder-box">
        <div className="folder-box-icon-group">
          <FolderIcon className="folder-icon"></FolderIcon>
        </div>
        <div className="information">
          <h5 className="name">Thư Mục</h5>
          <div className="warehouse-and-personal-in">
            <div className="ware">
              <p className="name">Kho dữ liệu</p>
              <p className="number">12000</p>
            </div>
            <div className="personal-in">
              <p className="name">Tài liệu cá nhân</p>
              <p className="number">6500</p>
            </div>
          </div>
        </div>
      </section>
      <section className="file-box box-element">
        <div className="file-box-icon-group">
          <BallotIcon className="file-icon"></BallotIcon>
        </div>
        <div className="information">
          <h5 className="name">Hồ Sơ</h5>
          <div className="warehouse-and-personal-in">
            <div className="ware">
              <p className="name">Kho dữ liệu</p>
              <p className="number">502</p>
            </div>
            <div className="personal-in">
              <p className="name">Tài liệu cá nhân</p>
              <p className="number">300</p>
            </div>
          </div>
        </div>
      </section>
      <section className="document-box">
        <div className="document-box-icon-group">
          <ArticleIcon className="document-icon"></ArticleIcon>
        </div>
        <div className="information">
          <h5 className="name">Tài liệu</h5>
          <div className="warehouse-and-personal-in">
            <div className="ware">
              <p className="name">Kho dữ liệu</p>
              <p className="number">22102</p>
            </div>
            <div className="personal-in">
              <p className="name">Tài liệu cá nhân</p>
              <p className="number">8231</p>
            </div>
          </div>
        </div>
      </section>
      <section className="user">
        <div className="user-icon-group">
          <PersonIcon className="user-icon"></PersonIcon>
        </div>
        <div className="information">
          <h5 className="name">Người dùng</h5>
          <div className="warehouse-and-personal-in">
            <div className="ware">
              <p className="name">Kho dữ liệu</p>
              <p className="number">502</p>
            </div>
            <div className="personal-in">
              <p className="name">Tài liệu cá nhân</p>
              <p className="number">500</p>
            </div>
          </div>
        </div>
      </section>
      <section className="warehouse">
        <div className="warehouse-icon-group">
          <InboxIcon className="warehouse-icon"></InboxIcon>
        </div>
        <div className="information">
          <h5 className="name">Kho dữ liệu</h5>
          <div className="warehouse-and-personal-in">
            <div className="ware">
              <p className="name">Kho dữ liệu</p>
              <p className="number">502</p>
            </div>
            <div className="personal-in">
              <p className="name">Tài liệu cá nhân</p>
              <p className="number">500</p>
            </div>
          </div>
        </div>
      </section>
      <section className="storage-capacity">
        <div className="storage-capacity-text">
          <h5 className="storage-capacity-name">Dung lượng Kho</h5>
          <p className="storage-personal">Dung lượng cá nhân</p>
        </div>
        <div className="statistics-bar">
          <div className="statistics-bar-color">
            <span id="pdf-element"></span>
            <span id="office-element"></span>
            <span id="image-element"></span>
            <span id="video-element"></span>
            <span id="sound-element"></span>
            <span id="zip-element"></span>
            <span id="other-element"></span>
          </div>
          <div className="total-storage">100.67GB</div>
        </div>
        <div className="file-text">
          <div className="file-text-child">
            <span className="file-type-text">Loại tệp</span>
            <span className="file-classification-text">
              <span className="file-biggest-text">Tệp lớn nhất</span>
              <span className="file-average-text">Trung bình</span>
              <span className="file-smallest-text">Tệp nhỏ nhất</span>
            </span>
            <span className="file-type-total">Tổng</span>
          </div>
          {/* PDF */}
          <div className="file-type-element">
            <div className="file-type-element-pdf">
              <div className="icon">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9519 0.5L19.4717 6.99062V22.6538C19.4717 23.6734 18.6414 24.5 17.6173 24.5H1.85445C0.830329 24.5 0 23.6734 0 22.6538V2.34615C0 1.32662 0.830329 0.5 1.85445 0.5H12.9519Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5445 22.6538C18.5445 23.1638 18.1291 23.5769 17.6173 23.5769H1.85445C1.34216 23.5769 0.927224 23.1638 0.927224 22.6538V2.34615C0.927224 1.83615 1.34216 1.42308 1.85445 1.42308H12.5175L18.5445 7.42308V22.6538ZM12.9524 0.5H1.85445C0.830329 0.5 0 1.32662 0 2.34615V22.6538C0 23.6734 0.830329 24.5 1.85445 24.5H17.6173C18.6414 24.5 19.4717 23.6734 19.4717 22.6538V6.99015L12.9524 0.5Z"
                    fill="#F1786B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.319 16.8472C15.2431 16.8938 15.0251 16.9225 14.8853 16.9225C14.4331 16.9225 13.8712 16.7128 13.0857 16.3692C13.3875 16.3465 13.6652 16.3345 13.9133 16.3345C14.3669 16.3345 14.5011 16.3327 14.9473 16.4486C15.3912 16.5645 15.3972 16.7982 15.319 16.8472ZM7.43476 16.9183C7.6088 16.6029 7.78885 16.2694 7.9726 15.9175C8.42249 15.0529 8.70668 14.3776 8.91636 13.8224C9.33663 14.5993 9.86012 15.2602 10.4743 15.7895C10.5521 15.8542 10.6345 15.9216 10.7182 15.9886C9.46854 16.2389 8.38685 16.5461 7.43476 16.9183ZM8.8946 8.75303C9.14269 8.75303 9.28433 9.38948 9.29636 9.98759C9.30839 10.5857 9.17046 11.0046 9.0006 11.3159C8.8585 10.8564 8.79046 10.1322 8.79046 9.65828C8.79046 9.65828 8.78074 8.75303 8.8946 8.75303ZM4.00363 20.2119C4.14387 19.8193 4.70346 19.042 5.52966 18.3547C5.5815 18.3118 5.70924 18.1898 5.82542 18.0757C4.96127 19.4775 4.38363 20.035 4.00363 20.2119ZM15.7448 16.3447C15.731 16.2408 15.649 16.111 15.5611 16.0232C15.3088 15.771 14.7553 15.639 13.9115 15.6265C13.3394 15.6205 12.6516 15.6713 11.9277 15.7752C11.6041 15.5858 11.27 15.3785 11.008 15.1281C10.3021 14.4589 9.71432 13.5292 9.34635 12.5061C9.37042 12.4105 9.39032 12.3269 9.41022 12.2415C9.41022 12.2415 9.80642 9.94695 9.70228 9.17009C9.6884 9.06433 9.67821 9.03385 9.65044 8.95025L9.61619 8.86065C9.50835 8.60662 9.29636 8.33782 8.96449 8.35213L8.76871 8.34613H8.76454C8.39241 8.34613 8.09294 8.53919 8.01287 8.82601C7.77265 9.72941 8.02074 11.0822 8.47063 12.8317L8.35492 13.1163C8.03277 13.9181 7.6287 14.7235 7.27323 15.4334L7.22694 15.5249C6.8511 16.2712 6.51091 16.9058 6.20126 17.443L5.88328 17.6139C5.85921 17.6264 5.3135 17.921 5.18576 17.9986C4.09944 18.6595 3.3797 19.4082 3.25982 20.0022C3.22187 20.1934 3.24964 20.4354 3.44358 20.5472L3.75184 20.7061C3.88606 20.773 4.0277 20.8077 4.17165 20.8077C4.94554 20.8077 5.84301 19.8271 7.08114 17.6305C8.50858 17.1585 10.136 16.7636 11.562 16.5479C12.6479 17.1686 13.9832 17.6019 14.827 17.6019C14.9774 17.6019 15.107 17.5876 15.2112 17.5589C15.3732 17.5141 15.5092 17.4208 15.593 17.2947C15.7569 17.0444 15.7888 16.6985 15.7448 16.3447Z"
                    fill="#F1786B"
                  />
                </svg>
              </div>

              <div className="information">
                <p className="name">Pdf</p>
                <div className="data">
                  <span className="number-file">5000 tệp</span>
                  <span className="data-biggest">10GB</span>
                  <span className="data-average">2GB</span>
                  <span className="data-smallest">1GB</span>
                  <span className="data-total">50gb</span>
                </div>
              </div>
            </div>
            {/* Office */}
            <div className="file-type-element-office">
              <div className="icon">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.84615 0.5H12.894L19.3846 6.99062V22.6538C19.3846 23.6734 18.558 24.5 17.5385 24.5H1.84615C0.826615 24.5 0 23.6734 0 22.6538V2.34615C0 1.32662 0.826615 0.5 1.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.4615 22.6538C18.4615 23.1638 18.048 23.5769 17.5385 23.5769H1.84615C1.33615 23.5769 0.923077 23.1638 0.923077 22.6538V2.34615C0.923077 1.83615 1.33615 1.42308 1.84615 1.42308H12.4615L18.4615 7.42308V22.6538ZM12.8945 0.5H1.84615C0.826615 0.5 0 1.32662 0 2.34615V22.6538C0 23.6734 0.826615 24.5 1.84615 24.5H17.5385C18.558 24.5 19.3846 23.6734 19.3846 22.6538V6.99015L12.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.0446 10.1923L12.5506 16.3682C12.4721 16.6885 12.4273 16.946 12.4158 17.1417H12.3923C12.365 16.8523 12.324 16.6026 12.269 16.3917L10.6753 10.1923H9.23996L7.51704 16.3446C7.42335 16.6843 7.36889 16.9539 7.35319 17.1532H7.32365C7.30842 16.8722 7.26919 16.6026 7.20689 16.3446L5.68335 10.1923H4.15381L6.5035 18.5946H8.11473L9.72042 12.7059C9.79473 12.4442 9.84135 12.1746 9.86119 11.8972H9.88427C9.89996 12.1945 9.94104 12.4677 10.0075 12.7179L11.6072 18.5946H13.1833L15.486 10.1923H14.0446Z"
                    fill="#2C81C6"
                  />
                </svg>
              </div>

              <div className="information">
                <p className="name">Office</p>
                <div className="data">
                  <span className="number-file">5000 tệp</span>
                  <span className="data-biggest">10GB</span>
                  <span className="data-average">2GB</span>
                  <span className="data-smallest">1GB</span>
                  <span className="data-total">50gb</span>
                </div>
              </div>
            </div>
            <div className="file-type-element-image">
              <div className="icon">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4710_9355)">
                    <g clipPath="url(#clip1_4710_9355)">
                      <path
                        d="M3.84628 0.5H14.8941L21.3847 6.99015V22.6538C21.3847 23.6734 20.5581 24.5 19.5386 24.5H3.84628C2.82674 24.5 2.00012 23.6734 2.00012 22.6538V2.34615C2.00012 1.32662 2.82674 0.5 3.84628 0.5Z"
                        fill="white"
                        fillOpacity="0.6"
                      />
                      <path
                        d="M19.5386 24.5H3.84628C2.82674 24.5 2.00012 23.6734 2.00012 22.6538V2.34615C2.00012 1.32662 2.82674 0.5 3.84628 0.5H14.8941L21.3847 6.99015V22.6538C21.3847 23.6734 20.5581 24.5 19.5386 24.5ZM20.4617 7.42308L14.4617 1.42308H3.84628C3.33628 1.42308 2.9232 1.83615 2.9232 2.34615V22.6538C2.9232 23.1634 3.33628 23.5769 3.84628 23.5769H19.5386C20.0481 23.5769 20.4617 23.1634 20.4617 22.6538V7.42308Z"
                        fill="#FFA000"
                      />
                      <path
                        d="M21.2495 19.8953C21.1595 19.9853 21.0413 20.03 20.9232 20.03C20.805 20.03 20.6869 19.9853 20.5969 19.8953L14.9933 14.3047L10.2497 19.041L12.6206 21.4063C12.8006 21.5863 12.8006 21.8776 12.6206 22.0576C12.5301 22.1476 12.412 22.1923 12.2943 22.1923C12.1761 22.1923 12.058 22.1476 11.968 22.0576L7.08858 17.1893L2.78796 21.4802C2.6075 21.6602 2.31535 21.6602 2.13535 21.4802C1.95488 21.3002 1.95488 21.009 2.13535 20.829L7.08858 15.8873L9.59658 18.3897L14.9933 13.0017L21.2495 19.244C21.43 19.424 21.43 19.7153 21.2495 19.8953ZM9.40227 14.1136C8.19073 14.1136 7.20581 13.1305 7.20581 11.9222C7.20581 10.7134 8.19073 9.73035 9.40227 9.73035C10.6138 9.73035 11.5987 10.7134 11.5987 11.9222C11.5987 13.1305 10.6138 14.1136 9.40227 14.1136ZM9.40227 10.6516C8.70027 10.6516 8.12888 11.2216 8.12888 11.9222C8.12888 12.6228 8.70027 13.1928 9.40227 13.1928C10.1043 13.1928 10.6757 12.6228 10.6757 11.9222C10.6757 11.2216 10.1043 10.6516 9.40227 10.6516Z"
                        fill="#FFA000"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4710_9355">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                    <clipPath id="clip1_4710_9355">
                      <rect
                        width="19.3846"
                        height="24"
                        fill="white"
                        transform="translate(2 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="information">
                <p className="name">Hình Ảnh</p>
                <div className="data">
                  <span className="number-file">5000 tệp</span>
                  <span className="data-biggest">10GB</span>
                  <span className="data-average">2GB</span>
                  <span className="data-smallest">1GB</span>
                  <span className="data-total">50gb</span>
                </div>
              </div>
            </div>

            {/* Video */}
            <div className="file-type-element-video">
              <div className="icon">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4710_9392)">
                    <g clipPath="url(#clip1_4710_9392)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.85445 0.5H14.9519L21.4717 6.99062V22.6538C21.4717 23.6734 20.6414 24.5 19.6173 24.5H3.85445C2.83033 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.83033 0.5 3.85445 0.5Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.5445 22.6538C20.5445 23.1638 20.1291 23.5769 19.6173 23.5769H3.85445C3.34216 23.5769 2.92722 23.1638 2.92722 22.6538V2.34615C2.92722 1.83615 3.34216 1.42308 3.85445 1.42308H14.5175L20.5445 7.42308V22.6538ZM14.9524 0.5H3.85445C2.83033 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.83033 24.5 3.85445 24.5H19.6173C20.6414 24.5 21.4717 23.6734 21.4717 22.6538V6.99015L14.9524 0.5Z"
                        fill="#F47F1F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.8359 17.3768C16.8201 18.3539 15.8549 19.096 14.6361 19.096C13.407 19.096 12.433 18.3423 12.433 17.3532C12.433 16.3877 13.407 15.6109 14.6361 15.6109C15.115 15.6109 15.5526 15.7277 15.9115 15.9262V10.2188L11.0417 11.5139V18.6954C11.0417 19.6139 10.0676 20.3435 8.83907 20.3435C7.61003 20.3435 6.63599 19.6139 6.63599 18.6954C6.63599 17.7774 7.61003 17.0472 8.83907 17.0472C9.31798 17.0472 9.75517 17.1603 10.114 17.35V11.5139C10.114 11.0897 10.3922 10.7131 10.7867 10.5954L15.6565 9.30033C15.9346 9.22972 16.236 9.27679 16.4678 9.4651C16.7001 9.65341 16.8392 9.91279 16.8392 10.2188V17.3768H16.8359Z"
                        fill="#F47F1F"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4710_9392">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                    <clipPath id="clip1_4710_9392">
                      <rect
                        width="19.4717"
                        height="24"
                        fill="white"
                        transform="translate(2 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="information">
                <p className="name">Video</p>
                <div className="data">
                  <span className="number-file">5000 tệp</span>
                  <span className="data-biggest">10GB</span>
                  <span className="data-average">2GB</span>
                  <span className="data-smallest">1GB</span>
                  <span className="data-total">50gb</span>
                </div>
              </div>
            </div>
            <div className="file-type-element-sound">
              <div className="icon">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4710_9392)">
                    <g clipPath="url(#clip1_4710_9392)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.85445 0.5H14.9519L21.4717 6.99062V22.6538C21.4717 23.6734 20.6414 24.5 19.6173 24.5H3.85445C2.83033 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.83033 0.5 3.85445 0.5Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.5445 22.6538C20.5445 23.1638 20.1291 23.5769 19.6173 23.5769H3.85445C3.34216 23.5769 2.92722 23.1638 2.92722 22.6538V2.34615C2.92722 1.83615 3.34216 1.42308 3.85445 1.42308H14.5175L20.5445 7.42308V22.6538ZM14.9524 0.5H3.85445C2.83033 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.83033 24.5 3.85445 24.5H19.6173C20.6414 24.5 21.4717 23.6734 21.4717 22.6538V6.99015L14.9524 0.5Z"
                        fill="#F47F1F"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.8359 17.3768C16.8201 18.3539 15.8549 19.096 14.6361 19.096C13.407 19.096 12.433 18.3423 12.433 17.3532C12.433 16.3877 13.407 15.6109 14.6361 15.6109C15.115 15.6109 15.5526 15.7277 15.9115 15.9262V10.2188L11.0417 11.5139V18.6954C11.0417 19.6139 10.0676 20.3435 8.83907 20.3435C7.61003 20.3435 6.63599 19.6139 6.63599 18.6954C6.63599 17.7774 7.61003 17.0472 8.83907 17.0472C9.31798 17.0472 9.75517 17.1603 10.114 17.35V11.5139C10.114 11.0897 10.3922 10.7131 10.7867 10.5954L15.6565 9.30033C15.9346 9.22972 16.236 9.27679 16.4678 9.4651C16.7001 9.65341 16.8392 9.91279 16.8392 10.2188V17.3768H16.8359Z"
                        fill="#F47F1F"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_4710_9392">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                    <clipPath id="clip1_4710_9392">
                      <rect
                        width="19.4717"
                        height="24"
                        fill="white"
                        transform="translate(2 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="information">
                <p className="name">Âm thanh</p>
                <div className="data">
                  <span className="number-file">5000 tệp</span>
                  <span className="data-biggest">10GB</span>
                  <span className="data-average">2GB</span>
                  <span className="data-smallest">1GB</span>
                  <span className="data-total">50gb</span>
                </div>
              </div>
            </div>
            <div className="file-type-element-zip">
              <div className="icon">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.85445 0.5H12.9519L19.4717 6.99062V22.6538C19.4717 23.6734 18.6414 24.5 17.6173 24.5H1.85445C0.830329 24.5 0 23.6734 0 22.6538V2.34615C0 1.32662 0.830329 0.5 1.85445 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5445 22.6538C18.5445 23.1638 18.1291 23.5769 17.6173 23.5769H1.85445C1.34216 23.5769 0.927224 23.1638 0.927224 22.6538V2.34615C0.927224 1.83615 1.34216 1.42308 1.85445 1.42308H12.5175L18.5445 7.42308V22.6538ZM12.9524 0.5H1.85445C0.830329 0.5 0 1.32662 0 2.34615V22.6538C0 23.6734 0.830329 24.5 1.85445 24.5H17.6173C18.6414 24.5 19.4717 23.6734 19.4717 22.6538V6.99015L12.9524 0.5Z"
                    fill="#C773C0"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.09971 10.1923H6.95416V7.88462H5.09971V10.1923ZM7.4173 12.5H4.63563C4.37972 12.5 4.17249 12.2932 4.17249 12.0385V7.42309C4.17249 7.16786 4.37972 6.96155 4.63563 6.96155H7.4173C7.67368 6.96155 7.88138 7.16786 7.88138 7.42309V12.0385C7.88138 12.2932 7.67368 12.5 7.4173 12.5ZM6.02693 20.8077H7.88138V19.4231H6.02693V20.8077ZM6.02693 18.0385H7.88138V16.6539H6.02693V18.0385ZM6.02693 15.2692H7.88138V13.8846H6.02693V15.2692ZM4.17249 16.6539H6.02693V15.2692H4.17249V16.6539ZM4.17249 19.4231H6.02693V18.0385H4.17249V19.4231ZM4.17249 22.1923H6.02693V20.8077H4.17249V22.1923ZM6.02693 23.5769H7.88138V22.1923H6.02693V23.5769Z"
                    fill="#C773C0"
                  />
                </svg>
              </div>

              <div className="information">
                <p className="name">Tệp nén</p>
                <div className="data">
                  <span className="number-file">5000 tệp</span>
                  <span className="data-biggest">10GB</span>
                  <span className="data-average">2GB</span>
                  <span className="data-smallest">1GB</span>
                  <span className="data-total">50gb</span>
                </div>
              </div>
            </div>
            <div className="file-type-element-other-type">
              <div className="icon">
                <svg
                  width="20"
                  height="25"
                  viewBox="0 0 20 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.85445 0.5H12.9519L19.4717 6.99062V22.6538C19.4717 23.6734 18.6414 24.5 17.6173 24.5H1.85445C0.830329 24.5 0 23.6734 0 22.6538V2.34615C0 1.32662 0.830329 0.5 1.85445 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5445 22.6538C18.5445 23.1638 18.1291 23.5769 17.6173 23.5769H1.85445C1.34216 23.5769 0.927224 23.1638 0.927224 22.6538V2.34615C0.927224 1.83615 1.34216 1.42308 1.85445 1.42308H12.5175L18.5445 7.42308V22.6538ZM12.9524 0.5H1.85445C0.830329 0.5 0 1.32662 0 2.34615V22.6538C0 23.6734 0.830329 24.5 1.85445 24.5H17.6173C18.6414 24.5 19.4717 23.6734 19.4717 22.6538V6.99015L12.9524 0.5Z"
                    fill="#217582"
                  />
                </svg>
              </div>

              <div className="information">
                <p className="name">Các tệp khác</p>
                <div className="data">
                  <span className="number-file">5000 tệp</span>
                  <span className="data-biggest">200MB</span>
                  <span className="data-average">100MB</span>
                  <span className="data-smallest">50MB</span>
                  <span className="data-total">2gb</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <span id="chart-area">
        <p>Đây là một biểu đồ đường</p>
      </span>

      <span className="common-profile-type file">
        <p className="fileName">Loại hồ sơ phổ biến</p>
        <div className="file-element">
          <span className="number1">1</span>
          <div className="name-and-number-of-file-element no1">
            <p className="file-element-name">Đấu thầu dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per1">30%</span>
        </div>
        <div className="file-element">
          <span className="number2">2</span>
          <div className="name-and-number-of-file-element no2">
            <p className="file-element-name">Thi công dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per2">20%</span>
        </div>
        <div className="file-element">
          <span className="number3">3</span>
          <div className="name-and-number-of-file-element no3">
            <p className="file-element-name">Triển khai dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per3">10%</span>
        </div>
        <div className="file-element">
          <span className="number4">4</span>
          <div className="name-and-number-of-file-element no4">
            <p className="file-element-name">Đào tạo dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per4">5%</span>
        </div>
        <div className="file-element">
          <span className="number5">5</span>
          <div className="name-and-number-of-file-element no5">
            <p className="file-element-name">Nghiệm thu dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per5">3%</span>
        </div>
        <div className="file-element">
          <span className="number6">6</span>
          <div className="name-and-number-of-file-element no6">
            <p className="file-element-name">Quản trị hệ thống</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per6">3%</span>
        </div>
        <div className="file-element">
          <span className="number7">7</span>
          <div className="name-and-number-of-file-element no7">
            <p className="file-element-name">Quy trình thủ tục</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per7">2%</span>
        </div>
        <div className="file-element">
          <span className="number8">8</span>
          <div className="name-and-number-of-file-element no8">
            <p className="file-element-name">Quản lý nhân lực</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per8">1%</span>
        </div>
        <div className="file-element">
          <span className="number9">9</span>
          <div className="name-and-number-of-file-element no9">
            <p className="file-element-name">Đánh giá công việc</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per9">1%</span>
        </div>
        <div className="file-element">
          <span className="number10">10</span>
          <div className="name-and-number-of-file-element no10">
            <p className="file-element-name">Triển khai dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per10">1%</span>
        </div>
      </span>
      <span className="common-profile-type document">
        <p className="fileName">Loại tài liệu phổ biến</p>
        <div className="file-element">
          <span className="number1">1</span>
          <div className="name-and-number-of-file-element no1">
            <p className="file-element-name">Đấu thầu dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per1">30%</span>
        </div>
        <div className="file-element">
          <span className="number2">2</span>
          <div className="name-and-number-of-file-element no2">
            <p className="file-element-name">Thi công dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per2">20%</span>
        </div>
        <div className="file-element">
          <span className="number3">3</span>
          <div className="name-and-number-of-file-element no3">
            <p className="file-element-name">Triển khai dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per3">10%</span>
        </div>
        <div className="file-element">
          <span className="number4">4</span>
          <div className="name-and-number-of-file-element no4">
            <p className="file-element-name">Đào tạo dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per4">5%</span>
        </div>
        <div className="file-element">
          <span className="number5">5</span>
          <div className="name-and-number-of-file-element no5">
            <p className="file-element-name">Nghiệm thu dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per5">3%</span>
        </div>
        <div className="file-element">
          <span className="number6">6</span>
          <div className="name-and-number-of-file-element no6">
            <p className="file-element-name">Quản trị hệ thống</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per6">3%</span>
        </div>
        <div className="file-element">
          <span className="number7">7</span>
          <div className="name-and-number-of-file-element no7">
            <p className="file-element-name">Quy trình thủ tục</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per7">2%</span>
        </div>
        <div className="file-element">
          <span className="number8">8</span>
          <div className="name-and-number-of-file-element no8">
            <p className="file-element-name">Quản lý nhân lực</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per8">1%</span>
        </div>
        <div className="file-element">
          <span className="number9">9</span>
          <div className="name-and-number-of-file-element no9">
            <p className="file-element-name">Đánh giá công việc</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per9">1%</span>
        </div>
        <div className="file-element">
          <span className="number10">10</span>
          <div className="name-and-number-of-file-element no10">
            <p className="file-element-name">Triển khai dự án</p>
            <p className="number-of-file-element">10.000 hồ sơ</p>
          </div>
          <span className="percentage per10">1%</span>
        </div>
      </span>
      <span className="common-profile-type newest-content">
        <p className="newestContentName">Loại hồ sơ phổ biến</p>
        <div className="newest-content-element element1">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
        <div className="newest-content-element element2">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
        <div className="newest-content-element element3">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
        <div className="newest-content-element element4">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
        <div className="newest-content-element element5">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
        <div className="newest-content-element element6">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
        <div className="newest-content-element element7">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
        <div className="newest-content-element element8">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
        <div className="newest-content-element element9">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
        <div className="newest-content-element element10">
          <span className="icon1">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_6203_1922)">
                <g clip-path="url(#clip1_6203_1922)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.84615 0.5H14.894L21.3846 6.99062V22.6538C21.3846 23.6734 20.558 24.5 19.5385 24.5H3.84615C2.82662 24.5 2 23.6734 2 22.6538V2.34615C2 1.32662 2.82662 0.5 3.84615 0.5Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4615 22.6538C20.4615 23.1638 20.048 23.5769 19.5385 23.5769H3.84615C3.33615 23.5769 2.92308 23.1638 2.92308 22.6538V2.34615C2.92308 1.83615 3.33615 1.42308 3.84615 1.42308H14.4615L20.4615 7.42308V22.6538ZM14.8945 0.5H3.84615C2.82662 0.5 2 1.32662 2 2.34615V22.6538C2 23.6734 2.82662 24.5 3.84615 24.5H19.5385C20.558 24.5 21.3846 23.6734 21.3846 22.6538V6.99015L14.8945 0.5Z"
                    fill="#2C81C6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0446 10.1923L14.5506 16.3682C14.4721 16.6885 14.4273 16.946 14.4158 17.1417H14.3923C14.365 16.8523 14.324 16.6026 14.269 16.3917L12.6753 10.1923H11.24L9.51704 16.3446C9.42335 16.6843 9.36889 16.9539 9.35319 17.1532H9.32365C9.30842 16.8722 9.26919 16.6026 9.20689 16.3446L7.68335 10.1923H6.15381L8.5035 18.5946H10.1147L11.7204 12.7059C11.7947 12.4442 11.8413 12.1746 11.8612 11.8972H11.8843C11.9 12.1945 11.941 12.4677 12.0075 12.7179L13.6072 18.5946H15.1833L17.486 10.1923H16.0446Z"
                    fill="#2C81C6"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_6203_1922">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
                <clipPath id="clip1_6203_1922">
                  <rect
                    width="19.3846"
                    height="24"
                    fill="white"
                    transform="translate(2 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="information">
            <p className="namefile">Tài liệu triển khai dự án Weone.docx</p>
            <div className="time">
              <p className="date">22/1/2022</p>
              <p className="hour">20:00</p>
            </div>
          </div>
          <span className="size">50MB</span>
        </div>
      </span>
    </div>
  );
}
export default App;
