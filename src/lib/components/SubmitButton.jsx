import React, { useEffect, useState } from "react";
import { ReactComponent as CheckIcon } from "./check.svg";
import "./SubmitButton.sass";

const SubmitButton = ({ type, size, disabled, onButtonClick }) => {
    const [variant, setVariant] = useState("default");
    const [buttonSize, setButtonSize] = useState("medium");

    const getVariant = () => {
        switch (type) {
            case "default":
                setVariant("default");
                break;
            case "inverted":
                setVariant("inverted");
                break;
            default:
                setVariant("default");
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

    const triggerButton = (e) => {
        if (e.keyCode === 83) {
            onButtonClick();
        }
    };

    useEffect(() => {
        getVariant();
        getButtonSize();
        window.addEventListener("keyup", triggerButton);
        return () => window.removeEventListener("keyup", triggerButton);
    });

    return (
        <button
            className={`btn ${
                disabled ? "disabled" : ""
            } ${buttonSize} ${variant}`}
            onClick={onButtonClick}
            disabled={disabled}
            aria-label="Submit"
        >
            <div className="btn-label">
                <CheckIcon className="icon" />
                <p className="text">Submit</p>
            </div>
        </button>
    );
};

export default SubmitButton;
