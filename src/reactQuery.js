import {useQuery,useMutation,useQueryClient} from 'react-query'
import axios from 'axios';

const getbucketList = () => {
    return axios.get("http://localhost:5001/bucket");
  };
const addbucketData = (data) => {
    return axios.post("http://localhost:5001/bucket", data);
  };

const deletebucketData =(data)=>{
    return axios.delete("http://localhost:5001/bucket", data)
}

const togglebucketData = (data)=>{
    return axios.patch("http://localhost:5001/bucket", data)
}
function Query(){
  const load_bucket = useQuery("bucketlist",getbucketList) 
  
 
  const queryClient = useQueryClient();
  const {addbucket,deletebucket,togglebucket} = useMutation({addbucketData,deletebucketData,togglebucketData},{
  onSuccess:()=>{
    queryClient.invalidateQueries("bucketlist")
  }
 })
    return
}

export default Query
