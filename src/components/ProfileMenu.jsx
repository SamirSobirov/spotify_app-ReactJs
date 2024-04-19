import { TiArrowSortedDown } from "react-icons/ti";


export default function ProfileMenu() {

    return (
        <div className="cursor-pointer flex items-center gap-2 bg-[#0A0A0A] rounded-3xl p-0.5 text-white select-none" >
            <img className="rounded-full object-cover" src="/images/user.png" alt="avatar" />
            <span className="" >User</span>
            <button>
                <TiArrowSortedDown size={24} />
            </button>
        </div>
    )
}