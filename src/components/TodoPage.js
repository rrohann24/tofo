import React, {useState, useEffect} from 'react'
import { useAuth } from '../Context/AuthContext'
const TodoPage = () => {
  //https://jsonplaceholder.typicode.com/todos
  const [ok, setOk] = useAuth();
  const [data,setData] = useState([]);
  const [del,setDel] = useState([]);
  const fetchData = async function(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const users = await res.json();
    setData([...users]);
    const deleted = new Array(data.length).fill(0);
    setDel(deleted);
  }
  const handleDelete = (ind)=>{
    del[ind] = true;
    setDel([...del]);
  }
  const handleCompleted = (ind) =>{
    data[ind].completed=true;
    setData([...data]);
  }
  if(ok){
    useEffect(() => {
      fetchData();
    }, []);
  }
  return (
    <div className="p-2">
      {ok ? (
        <div className="flex flex-col border m-2 border-blue-500 rounded-xl">
          <div className="border p-2 m-2 text-center border-blue-500 rounded-xl">
            <h1 className="text-4xl">Todo</h1>
          </div>
          <div className="flex flex-row justify-around">
            <div>
              <h1 className="text-2xl text-center border border-blue-500 m-1 rounded-xl">
                pending
              </h1>
              {data && (
                <div className="flex flex-col border m-1 p-1 border-blue-500 rounded-xl">
                  {data.map((ele, ind) => {
                    return (
                      <div key={ind}>
                        {ele.completed == false && !del[ind] && (
                          <div className="flex justify-between border m-1">
                            <h1>{ele?.title}</h1>
                            <div className="flex">
                              <button
                                onClick={() => {
                                  handleCompleted(ind);
                                }}
                              >
                                ✅
                              </button>
                              <button
                                onClick={() => {
                                  handleDelete(ind);
                                }}
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl text-center border border-blue-500 m-1 rounded-xl">
                completed
              </h1>
              {data && (
                <div className="flex flex-col border m-1 p-auto border-blue-500 rounded-xl">
                  {data.map((ele, ind) => {
                    return (
                      <div key={ind}>
                        {ele.completed == true && !del[ind] && (
                          <div className="flex justify-between border m-1">
                            <h1>{ele?.title}</h1>
                            <button
                              onClick={() => {
                                handleDelete(ind);
                              }}
                            >
                              🗑️
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl text-center border border-blue-500 m-1 rounded-xl">
                Deleted
              </h1>
              {data && (
                <div className="flex flex-col border m-1 p-auto border-blue-500 rounded-xl">
                  {data.map((ele, ind) => {
                    return (
                      <div key={ind}>
                        {del[ind] == true && (
                          <h1 className="border m-1">{ele?.title}</h1>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h1>login first</h1>
      )}
    </div>
  );
}

export default TodoPage