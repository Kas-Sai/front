import React, { useState } from "react";
import WoToday from "../pages/PageTransfer/components/WoToday";
import WoHistory from "../pages/PageTransfer/components/WoHistory";

export const SubNavigation = () => {
    const [activeContent, setActiveContent] = useState(null);

    const navItems = [
        { id: 1, label: "Today's Ticket", component: <WoToday /> },
        { id: 2, label: "Historical Tickets", component: <WoHistory /> },
    ];

    return (
        <div>
            <ul className="flex gap-4">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-black"
                            onClick={() => setActiveContent(item.component)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="mt-2 p-4 bg-yellow-400">{activeContent}</div>
        </div>
    );
};

export const SubHeader = ({ children }) => {
    return <header className="subheader">{children}</header>;
};
