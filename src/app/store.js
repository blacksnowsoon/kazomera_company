import { configureStore } from "@reduxjs/toolkit";
import signupSlice from "../features/signup/signupSlice";
import loginSlice from "../features/login/loginSlice";
import logoutSlice from "../features/logout/logoutSlice";

export const store = configureStore({
    reducer: {
        signupSlice,
        loginSlice,
        logoutSlice,
    }
})


// <FontAwesomeIcon icon={solid("square-p")} style={{color: "#000000",}} />
// <FontAwesomeIcon icon={light("square-p")} style={{color: "#000000",}} />

// <FontAwesomeIcon icon={light("handshake")} />

// <FontAwesomeIcon icon={light("sack-dollar")} />

// <FontAwesomeIcon icon="fa-light fa-circle-user" />





// <FontAwesomeIcon icon={solid("ellipsis-vertical")} />


// <FontAwesomeIcon icon="fa-light fa-heart" />
// <FontAwesomeIcon icon={light("star")} />
// <FontAwesomeIcon icon={light("circle-chevron-down")} />
// <FontAwesomeIcon icon={light("comment")} />
// <FontAwesomeIcon icon="fa-light fa-reply" />
// <FontAwesomeIcon icon={light("question")} />
// <FontAwesomeIcon icon={light("chart-mixed-up-circle-dollar")} />

// <FontAwesomeIcon icon={thin("microphone")} />
// <FontAwesomeIcon icon={thin("camera")} />