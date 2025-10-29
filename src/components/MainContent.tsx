import Cards from './Cards';
import { data } from '@/data/data';

type DataItem = { img?: string; title?: string; desc?: string };

const MainContent = () => {
  // Split array into chunks of 3
  const chunkArray = (arr: DataItem[], size: number): DataItem[][] => {
    const chunks: DataItem[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const chunks = chunkArray(data as DataItem[], 3);

  // Headings for each group (first is Nav, then other headings)
  const headings = ["Nav", "Move in focus", "Learn more about Live 12"];

  return (
    <>
      {chunks.map((chunk, i) => (
        <div key={i} className="">
          {/* Render Nav for first group */}
          {i === 0 && (
            <nav className="flex justify-between items-center md:p-4 md:text-xl mb-4 flex-wrap text-[12px]">
              <h1 className="text-black">The latest from Ableton</h1>
              <div className="flex gap-2 lg:gap-2.5 text-blue-600">
                <a href="#">All posts</a>
                <a href="#">Artist</a>
                <a href="#">News</a>
                <a href="#">Downloads</a>
                <a href="#">Tutorials</a>
                <a href="#">Videos</a>
                <a href="#">Loop</a>
              </div>
            </nav>
          )}

          {/* Render heading for other groups */}
          {i > 0 && headings[i] && (
            <h2 className="text-2xl font-semibold text-black mb-4 lg:pl-10 ">{headings[i]}</h2>
          )}

          {/* Grid of 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-6 max-w-[100%] ">
            {chunk.map((item, index) => (
              <Cards 
                key={index + i * 3}
                title={item.title}
                img={item.img}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      ))}

      <div className="sm:flex justify-center items-center lg:p-8 text-xl mb-4 bg-gray-200 pt-8 pb-8 pl-2 pr-2" >
        <h1 className='text-blue-600 text-[0.8rem] text-center lg:text-2xl'><span className='text-black'>More : </span>All posts Artists News Downloads Tutorials Videos Loop One Thing</h1>
      </div>
    </>
  );
};

export default MainContent;
