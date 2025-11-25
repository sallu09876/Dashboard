import React from "react";

export default function ChartCard({ title, children, small }) {
    return (
        <div className={"card " + (small ? "card-small" : "")}>
            {title && <h3 className="cardTitle">{title}</h3>}
            <div className="cardInner">{children}</div>
        </div>
    );
}
