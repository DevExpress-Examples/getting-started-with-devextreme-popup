import React, { useState } from "react";
import logo from "./assets/images/dx-logo.png";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";

import { Popup } from "devextreme-react/ui/popup";
import { Button } from "devextreme-react/ui/button";
import { ScrollView } from "devextreme-react/ui/scroll-view";

const renderContent = () => {
    return (
        <>
            <ScrollView height="100%" width="100%">
                <img src={logo} alt="logo" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Penatibus et magnis dis parturient. Eget
                    dolor morbi non arcu risus. Tristique magna sit amet
                    purus gravida quis blandit. Auctor urna nunc id cursus
                    metus aliquam eleifend mi in. Tellus orci ac auctor
                    augue mauris augue neque gravida. Nullam vehicula ipsum
                    a arcu. Nullam ac tortor vitae purus faucibus ornare
                    suspendisse sed nisi. Cursus in hac habitasse platea
                    dictumst. Egestas dui id ornare arcu. Dictumst
                    vestibulum rhoncus est pellentesque elit ullamcorper
                    dignissim.
                </p>
                <p>
                    Mauris rhoncus aenean vel elit scelerisque mauris
                    pellentesque pulvinar. Neque volutpat ac tincidunt vitae
                    semper quis lectus. Sed sed risus pretium quam vulputate
                    dignissim suspendisse in. Urna nec tincidunt praesent
                    semper feugiat nibh sed pulvinar. Ultricies lacus sed
                    turpis tincidunt id aliquet risus feugiat. Amet cursus
                    sit amet dictum sit amet justo donec enim. Vestibulum
                    rhoncus est pellentesque elit ullamcorper. Id aliquet
                    risus feugiat in ante metus dictum at.
                </p>
            </ScrollView>
        </>
    )
};


const App = () => {
    const [isPopupVisible, setPopupVisivility] = useState(true);

    const togglePopup = () => {
        setPopupVisivility(!isPopupVisible);
    };

    return (
        <>
            <Button text="Open popup" onClick={togglePopup} />
            <Popup
                contentRender={renderContent}
                visible={isPopupVisible}
                closeOnOutsideClick={true}
                onHiding={togglePopup}
                showTitle={true}
                title="Information"
                width={500}
                height={500}
                resizeEnabled={true}
                dragEnabled={true}
                position="center">
            </Popup>
        </>
    );
};
export default App;
