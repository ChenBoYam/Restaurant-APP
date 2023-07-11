import React from "react";


function TopBar() {
    return (
        <div id="topbar" class="d-flex align-items-center fixed-top">
            <div class="container d-flex justify-content-center justify-content-md-between">

                <div class="contact-info d-flex align-items-center">
                    <i class="bi bi-phone d-flex align-items-center"><span>訂位專線：(07)334-6263</span></i>
                    <i class="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sun 1100 - 2045</span></i>
                </div>

                {/* <div class="languages d-none d-md-flex align-items-center">
                    <ul>
                        <li>En</li>
                        <li><a href="#">De</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
};

export default TopBar;