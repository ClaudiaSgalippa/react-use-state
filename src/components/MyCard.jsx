import { useState } from "react";
import languages from "./languages";

export default function MyCard () {

    const [selectLanguage, setSelectLanguage] = useState(languages[0]);

    return (
        <div className="container">
            <div className="containerButtons">

                {languages.map ((language, key) => (
                    <button onClick={() => setSelectLanguage(language)} key={key} id={language.id} className="button">{language.title}</button>
                ))}

            </div>
            <div className="containerDescription">
                <h3>{selectLanguage.title}</h3>
                <p>{selectLanguage.description}</p>
            </div>
        </div>
    )
}