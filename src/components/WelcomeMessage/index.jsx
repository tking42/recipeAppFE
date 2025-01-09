const WelcomeMessage = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-evenly items-center m-4 lg:m-12 lg:p-8 text-center">
            <img
                src="backgroundImg.jpg"
                alt="food"
                className="md:w-1/3 w-2/3 h-auto rounded-full transform rotate-120 skew-x-12"
            />
            <div className="md:w-1/3">
                <p className="text-6xl font-extrabold m-2 underline italic ">Hungry?</p>
                <p className="text-2xl">
                    Turn your spare ingredients into delicious dishes. With over <strong>45,000</strong> recipes, find the perfect dish for any craving — whether it's a sweet treat or a fancy dinner.
                    Log In / Sign up to use our recipe finder and start cooking today!
                </p>
            </div>
        </div>

    )
}
export default WelcomeMessage