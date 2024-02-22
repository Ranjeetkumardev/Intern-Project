//const [postData, setPostData] = useState([]);
const dispatch = useDispatch();

const getData = async () => {
  const data = await fetch(FAKE_POST_API);
  const json = await data.json();
  //console.log(json);
  dispatch(AllPost(json));
  //  setPostData(json);
};
useEffect(() => {
  getData();
}, []);

