import Form from "../Form";

const Header = ({ loggedIn, user, setUser}) => {
    return (
        <>
            {loggedIn === false ? (
                <>
                    <div className="flex justify-evenly items-center m-12 p-8">
                        <img
                            src="backgroundImg.jpg"
                            alt="food"
                            className="w-1/3 h-auto rounded-full transform rotate-120 skew-x-12"
                        />
                        <div className='w-1/3'>
                            <p className='text-7xl font-bold '>Hungry?</p><br />
                            <p className='text-3xl'>
                                Use the recipe finder to turn your spare ingredients into something
                                delicious from over <strong>45,000</strong> recipes. Whether you want a sweet treat or a fancy dinner, there will be a recipe for you!
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <p>Welcome {user}</p>
                    <Form/>
                </>
            )}
        </>
    );
}

export default Header;
