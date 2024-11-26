import {useState} from "react";

const RecipeModal = ({ recipe, onClose }) => {
    const [activeTab, setActiveTab] = useState('ingredients'); // Default to ingredients tab

    const toggleTab = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full m-12">

                <div className="flex justify-between">
                    <p className="text-xl font-bold mb-4">{recipe.title}</p>

                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Close
                    </button>
                </div>

                {/* Tab navigation */}
                <p className="text-xl font-bold mb-4">
                    <span
                        onClick={() => toggleTab('ingredients')}
                        className={`cursor-pointer ${activeTab === 'ingredients' ? 'text-gray-700 font-bold' : 'text-gray-400 font-light'}`}
                    >
                        Ingredients
                    </span> | <span
                        onClick={() => toggleTab('method')}
                        className={`cursor-pointer ${activeTab === 'method' ? 'text-gray-700 font-bold' : 'text-gray-400 font-light'}`}
                    >
                        Method
                    </span>
                </p>
                {activeTab === 'ingredients' ? (
                    <div className="grid grid-cols-2">
                        {recipe.ingredients.split('#').map((ing, index) => (
                            <ul key={index}>
                                <li>{ing}</li>
                            </ul>
                        ))}
                    </div>
                ) : (
                    <div>
                        <p>
                            {recipe.instructions.startsWith('Watch how to make this recipe.')
                                ? recipe.instructions.slice(30)
                                : recipe.instructions}
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default RecipeModal;
