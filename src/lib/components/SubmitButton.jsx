import React, { useEffect, useState } from "react";
import { ReactComponent as CheckIcon } from "./check.svg";
import "./SubmitButton.sass";

const SubmitButton = ({ type, size, disabled, onButtonClick }) => {
    const [variant, setVariant] = useState("primary");
    const [buttonSize, setButtonSize] = useState("medium");

    const getVariant = () => {
        switch (type) {
            case "primary":
                setVariant("primary");
                break;
            case "secondary":
                setVariant("secondary");
                break;
            default:
                setVariant("primary");
        }
    };

    const getButtonSize = () => {
        switch (size) {
            case "small":
                setButtonSize("small");
                break;
            case "large":
                setButtonSize("large");
                break;
            default:
                setButtonSize("medium");
        }
    };

    useEffect(() => {
        getVariant();
        getButtonSize();
    });

    return (
        <button
            className={`btn ${
                disabled ? "disabled" : ""
            } ${buttonSize} ${variant}`}
            onClick={onButtonClick}
            disabled={disabled}
        >
            <div className="btn-label">
                <CheckIcon className="icon" />
                <p className="text">Submit</p>
            </div>
        </button>
    );
};

export default SubmitButton;
