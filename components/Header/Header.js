import { useAuth } from "@/context/AuthContext";
import { AlertBox } from "../AlertBox";
import HeadNav from "../ui/HeadNav";

const Header = () => {
	
	const { error, alertMessage } = useAuth();

	return (
		<header className="sticky flex w-screen top-0 h-24 p-2">
			{error && <div className="absolute right-0 mr-5 p-2"><AlertBox message={alertMessage}/></div>}
				<HeadNav />
		</header>
	);
};

export default Header;
