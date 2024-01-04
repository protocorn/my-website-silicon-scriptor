    'use client';

    import { useRecoilState } from 'recoil';

    import Category from '@/components/filter/category';
    import { categoriesState } from '@/states/categories';
    import React, { useEffect, useRef, useState } from 'react';

    export default function CategoryFilter({
      allCategories,
    }: {
      allCategories: string[];
    }) {
      const [categories, setCategories] = useRecoilState(categoriesState);
      const clearAllActive = categories.selected.length > 0;
      // Ref to the container element
    const containerRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    // State to store the remaining height dynamically
    const [remainingHeight, setRemainingHeight] = useState<number>(0);

    // Function to calculate the remaining height
    const calculateRemainingHeight = () => {
        if (containerRef.current && overlayRef.current) {
          const { scrollHeight, scrollTop, clientHeight } = containerRef.current;

          // Calculate remaining height
          const remaining = scrollHeight - (scrollTop + clientHeight);
          const overlayBottom = remaining > 0 ? 0 : Math.abs(remaining);
          overlayRef.current.style.bottom = `${overlayBottom}px`;
          // Ensure the remaining height is not negative
          return Math.max(0, remaining);
        }

        return 0;
    };
    useEffect(() => {
        const handleScroll = () => {
          setRemainingHeight(calculateRemainingHeight());
        };
        const containerElement = containerRef.current;
        if (containerElement) {
          containerElement.addEventListener('scroll', handleScroll);
        }
    
        // Cleanup the event listener when the component is unmounted
        return () => {
          if (containerElement) {
            containerElement.removeEventListener('scroll', handleScroll);
          }
        };
    }, []);

      const handleClearAll = () => {
        setCategories({
          selected: [],
          active: [],
        });
      };
      return (
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Search by topics</h2>
            <button
              onClick={handleClearAll}
              className={`relative -right-10 text-xs ${
                !clearAllActive &&
                'pointer-events-none text-gray-300 dark:text-gray-600'
              }`}
            >
              Clear All
            </button>
          </div>
          <div className={`flex max-h-[112px] p-5 overflow-y-auto no-scrollbar flex-wrap justify-start gap-y-[0.3rem] relative`} ref={containerRef}>
            {allCategories.map((category) => (
              <Category key={category} category={category} />
            ))}
          </div>
        </div>
      );
    }
