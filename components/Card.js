
import Link from 'next/link';

const Card = ({ id, name, email }) => {
    return (
        <Link href="/robot/[id]" as={`/robot/${id}`}>
          <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
              <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
              <div>
                  <h2>{name}</h2>
                  <p>{email}</p>
              </div>
          </div>
        </Link>
    );
};

export default Card;
