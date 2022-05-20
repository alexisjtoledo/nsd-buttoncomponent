import React, { useEffect, useState } from "react";
import { ReactComponent as CheckIcon } from "./check.svg";
import "./SubmitButton.sass";

const SubmitButton = ({ type, size, disabled, onButtonClick }) => {
    /**
     * State
     *  buttonSize @type {String} - Default value: "medium"
     *  variant @type {String} - Default value: "default"
     *  */
    const [variant, setVariant] = useState("default");
    const [buttonSize, setButtonSize] = useState("medium");

    /**
     *  Sets the value of the variant on the state
     */
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

    /**
     *  Sets the value of the size on the state
     */
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
