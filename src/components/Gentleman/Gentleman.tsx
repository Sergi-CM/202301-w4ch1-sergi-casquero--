import "./Gentleman.css";

interface GentlemanStructure {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}

interface GentlemanProps {
  gentleman: GentlemanStructure;
}

const Gentleman = ({ gentleman }: GentlemanProps): JSX.Element => {
  return (
    <>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${gentleman.name}.jpg`}
          alt={`${gentleman.name} pointing at you`}
        />
        <span className="gentleman__initial">
          {gentleman.name[0].toLocaleUpperCase()}
        </span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentleman.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gentleman.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>{" "}
            {gentleman.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{" "}
            {gentleman.twitter}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Gentleman;
