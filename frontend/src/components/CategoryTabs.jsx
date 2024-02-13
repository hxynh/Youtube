import { ButtonDefault, IconGhost } from './ButtonStyles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRef, useState } from 'react';

const TRANSLATE_PX = 150;

export default function CategoryTabs ({allCategories, selectedCategory, setSelectedCategory}) {
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [translate, setTranslate] = useState(0);
    const categoriesRef = useRef(null) //To store the size of the categories container

    function handleLeftTranslate() {
        setShowRightArrow(true);
        setTranslate( translate => {
            const translateShift = translate - TRANSLATE_PX;
            if  (translateShift <= 0){
                setShowLeftArrow(false);
                return 0;
            }
            return translateShift;
        }                        
        )
    }

    function handleRightTranslate() {
        setTranslate(translate => {
            setShowLeftArrow(true);
            const translateShift = translate + TRANSLATE_PX;
            const containerWidth = categoriesRef.current.scrollWidth; //Width of the entire category container
            const screenWidth = categoriesRef.current.clientWidth;    //Visible width of the screen 
            
            console.log(containerWidth, screenWidth, translateShift);
            if(categoriesRef.current === null) { //If there's nothing in the container
                return translate;
            }
            if (translateShift + screenWidth >= containerWidth) { //If it reaches the end of the container
                setShowRightArrow(false);
                return containerWidth - screenWidth;
            }
            return translateShift; 
            }
        )
    }
    
    return (
        <div ref={categoriesRef} className='overflow-x-hidden relative pb-1'> 
            <div //Category tabs
                className='flex whitespace-nowrap gap-3 transition-transform w-[max-content]'
                style={{ transform: `translateX(-${translate}px)` }}
            >
                {allCategories.map((category) => (
                    <ButtonDefault
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`z-0 py-1 px-3 rounded-lg whitespace-nowrap ${category === selectedCategory ? "bg-secondary-dark hover:bg-secondary-dark-hover text-white " : "" } `}
                    >
                        {category}
                    </ButtonDefault>
                ))}
            </div>
            {showLeftArrow && <div className='absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full'> {/*Left arrow*/}
                <IconGhost 
                    className="h-full aspect-square w-auto p-1.5"
                    onClick={handleLeftTranslate}
                >
                    <ChevronLeftIcon />
                </IconGhost>
            </div>}
            {showRightArrow && <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end'> {/*Right arrow*/}
                <IconGhost  
                    className="h-full aspect-square w-auto p-1.5"
                    onClick={handleRightTranslate}>
                    <ChevronRightIcon />
                </IconGhost>
            </div>}
        </div>
        )
}