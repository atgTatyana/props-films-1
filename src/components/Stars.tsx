import { Star } from "./Star"

type StarsProps = {
  count: number;
}

type countArray = boolean[];
const starsArr: countArray = [] ;

export const Stars = ( { count = 0 }: StarsProps) => {

  if (count >= 1 && count < 6 && typeof(count) === 'number') {
    for(let i = 0; i < count; i += 1) {
      starsArr[i] = true;
    }
  
    return (
      <ul className="card-body-stars">
        {starsArr.map((item) => item && <Star key={crypto.randomUUID()} />)}
      </ul>
    )
  }
}
