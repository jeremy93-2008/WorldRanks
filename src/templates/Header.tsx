import logo from '../assets/Logo.svg'
export function Header() {
    return (
        <section className="header flex flex-0 items-center justify-center w-full h-[240px]">
            <img src={logo} alt="Logo" />
        </section>
    )
}
