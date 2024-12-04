import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface Option {
    title: string,
    color: string,
    page: string
}

const NavBar = () => {

    const navigate = useNavigate();

    const options: Option[] = [{
        title: "About me",
        color: "pastel-blue",
        page: "/"
    }, {
        title: "Projects",
        color: "pastel-yellow",
        page: "/projects"
    }, {
        title: "Contact",
        color: "dusty-pink",
        page: "/contact"
    }]

    const [selectedOption, setSelectedOption] = useState<Option>(sessionStorage.getItem('option') ? JSON.parse(sessionStorage.getItem('option')!) : options[0]);

    const handleSelectedOption = (option : Option) => {
        setSelectedOption(option);
        sessionStorage.setItem('option', JSON.stringify(option));
        navigate(option.page);
    }

    return (
        <div className="flex gap-x-5 mt-5 ms-5">
            {options.map((option) => (
                <div
                    key={option.title}
                    onClick={() => handleSelectedOption(option)}
                    className={`flex justify-center py-3 px-5 hover:cursor-pointer ${option.title === selectedOption.title ? `bg-${option.color} text-gray-background pointer-events-none`
                        : `text-${option.color} hover:underline`}`}
                >
                    <span>{option.title}</span>
                </div>
            ))}

        </div>
    )
}

export default NavBar