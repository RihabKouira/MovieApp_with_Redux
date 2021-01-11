import { v4 as uuidv4 } from "uuid";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
  FILTER_MOVIE,
  RATE_SEARCH,
} from "../actions/types";
let initialState = [
  {
    id: uuidv4(),
    img:
      "https://resizing.flixster.com/w0-L_OjKWmAZALe0Dv3T8i61tcw=/180x267/v1.bTsxMzM1OTI5MjtqOzE4NzAxOzIwNDg7NDA1MDs2MDAw",
    title: "THE OTHER LAMB",
    auther: "Malgorzata Szumowska",
    description:
      "A young woman born into an all-female cult beings to question the teachings of her leader",
    rating: 2,
    trailer: "https://www.youtube.com/embed/4gjvyfjeJKM",
  },
  {
    id: uuidv4(),
    img:
      "https://resizing.flixster.com/sTCbx82_mIuzzi58EYMYNuk0fPk=/180x267/v1.bTsxMzI3ODg1OTtqOzE4NzI3OzIwNDg7NjA3Mjs5MDAw",
    title: "BAD BOYS FOR LIFE",
    auther: "Adil El Arbi, Bilall Fallah",
    description:
      "The Bad Boys Mike Lowrey and Marcus Burnett are back together for one last ride in the highly anticipated Bad Boys for Life.",
    rating: 4,
    trailer: "https://www.youtube.com/embed/jKCj3XuPG8M",
  },
  {
    id: uuidv4(),
    img:
      "https://resizing.flixster.com/4tf2VICqHsFsIk1VaSw9XJgUEsg=/206x305/v2/https://resizing.flixster.com/u8avPz56JgG3LgQ37asRNe3UQMA=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzJjYTM2NWYxLWI4NDgtNDQ3Mi05YTA5LWIyYTI4NThiZTJkYS53ZWJw",
    title: "MALEFICENT",
    auther: "Robert Stromberg",
    description:
      "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
    rating: 4,
    trailer: "https://www.youtube.com/embed/n0OFH4xpPr4",
  },
  {
    id: uuidv4(),
    img:
      "https://resizing.flixster.com/ZDisBvib7RW1HNgjRkzp1Tty9zM=/206x305/v2/https://resizing.flixster.com/Uolvsd73gtBbxnVk_rWpshGLnHU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2Y1NmMxNDFkLTc5M2MtNDdiZS1iZTcwLWIxZGRiYTg2YTMzZi53ZWJw",
    title: "THE INVISIBLE MAN",
    auther: "Leigh Whannell",
    description:
      "When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, Cecilia works to prove that she is being hunted by someone nobody can see.",
    rating: 3,
    trailer: "https://www.youtube.com/embed/Pso0Aj_cTh0",
  },
  {
    id: uuidv4(),
    img:
      "https://resizing.flixster.com/vEdWD5JLBiRuHF99LQb1vxMjnCA=/206x305/v2/https://resizing.flixster.com/UHXfYNLDqLdHdulYTnDILH-qReY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2MyZWM4MjVhLWQ2MTYtNDEwMy05ZDI5LWNmNjI5Y2Q0MzU1Ny53ZWJw",
    title: "BIRD BOX",
    auther: " Susanne Bier",
    description:
      "A woman and a pair of children are blindfolded and make their way through a dystopian setting. ",
    rating: 3,
    trailer: "https://www.youtube.com/embed/o2AsIXSh2xo",
  },
];

const MovieReducer = (
  state = { filterTitle: "", filterRate: 0, initialState },
  action
) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        initialState: [...state.initialState, action.payload],
      };
    case DELETE_MOVIE:
      return {
        ...state,
        initialState: state.initialState.filter(
          (el) => el.id !== action.payload
        ),
      };
    case FILTER_MOVIE:
    
      return { ...state, filterTitle: action.payload };
    case RATE_SEARCH:
  
    return { ...state, filterRate: action.payload };

    default:
      return state;
  }
};
export default MovieReducer;
