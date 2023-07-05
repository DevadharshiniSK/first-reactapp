import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faUsers,faFolderOpen,faBagShopping,faLightbulb,faUser,faClipboard,faPlus} from '@fortawesome/free-solid-svg-icons'
import logo from'./assets/logo.jpg';

function App() {
  return (
    <div className='flex'>
      <div className={` w-1/5 h-screen bg-purple`}>
        <div> <span className='flex p-5 gap-x-3'><img src={logo} alt="logo" style={{width:'40px',height:'40px'}}/><h3 className='text-white text-2xl p-3'>humbird.ai</h3></span></div>
        <div className='flex text-white gap-x-5 pl-5 pb-4'><FontAwesomeIcon className='text-xl' icon={faBars} /><span className='text-base'>Dashboard</span></div>
        <div className='flex text-white gap-x-5 pl-5 pb-4'><FontAwesomeIcon className='text-xl' icon={faUsers} /><span className='text-base'>Customers</span></div>
        <div className='flex text-white gap-x-5 pl-5 pb-4'><FontAwesomeIcon className='text-xl' icon={faFolderOpen} /><span className='text-base'>Projects</span></div>
        <div className='flex text-white gap-x-5 pl-5 pb-4'><FontAwesomeIcon className='text-xl' icon={faBagShopping} /><span className='text-base'>Orders</span></div>
        <div className='flex text-white gap-x-5 pl-5 pb-4'><FontAwesomeIcon className='text-xl' icon={faLightbulb} /><span className='text-base'>New Ideas</span></div>
        <div className='flex text-white gap-x-5 pl-5 pb-4'><FontAwesomeIcon className='text-xl' icon={faUser} /><span className='text-base'>Accounts</span></div>
        <div className='flex text-white gap-x-5 pl-5 pb-4'><FontAwesomeIcon className='text-xl' icon={faClipboard} /><span className='text-base'>Tasks</span></div>
      </div>
      <div className='w-4/5 h-full'>
        <div className='flex h-20 justify-between p-5'>
          <div className='flex gap-x-5 pl-5 pb-4'><FontAwesomeIcon className='text-2xl' icon={faBars} /><span className='text-2xl'>Dashboard</span></div>
          <div><form>
             <input type='search'  className='block w-48 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg' placeholder='search here'></input>
          </form></div>
          <div className='flex gap-x-5 pl-5 pb-4'><FontAwesomeIcon className='text-xl' icon={faUser} /><span className='text-base'>Admin</span></div>
        </div>
        <div className='h-full bg-slate-200'>

            <div className='grid grid-cols-4 p-8 gap-8'>
              <div className='flex justify-around pt-10 h-32 bg-white'>
                <div>
                    <h1>50</h1>
                    <span><h3>Customers</h3></span>
                </div>
                <div>
                    <span><FontAwesomeIcon className='text-2xl' icon={faUsers} /></span>
                </div>
              </div>
              <div className='flex justify-around pt-10 h-32 bg-white'>
                <div>
                    <h1>73</h1>
                    <span><h3>Projects</h3></span>
                </div>
                <div>
                    <span><FontAwesomeIcon className='text-2xl' icon={faFolderOpen} /></span>
                </div>
              </div>
              <div className='flex justify-around pt-10 h-32 bg-white'>
                <div>
                    <h1>105</h1>
                    <span><h3>Orders</h3></span>
                </div>
                <div>
                    <span><FontAwesomeIcon className='text-2xl' icon={faBagShopping} /></span>
                </div>
              </div>
              <div className='flex justify-around pt-10 h-32 bg-white'>
                <div>
                    <h2>Add Customer</h2>
                </div>
                <div>
                    <span><FontAwesomeIcon className='text-2xl' icon={faPlus} /></span>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-3 p-8 gap-6'>
              <div className='col-span-2 bg-white w-full'>
                  <div className='flex justify-between p-5'>
                    <h3>Recent Projects</h3> 
                    <button className='rounded text-white bg-purple p-1'>See all</button>
                  </div>
                  <div class="w-full border-b-2 my-2 "></div>
                  <table className='table min-w-full m-3'>
                          <thead className='p-5'>
                             <tr className='border-y-2 m-2 border-gray-200'>
                                <td>Project Title</td>
                                <td>Department</td>
                                <td>Status</td>
                             </tr>
                          </thead>
                           <tbody className='p-5'>
                              <tr>
                                <td>UI/UX Design</td>
                                <td>UI Team</td>
                                <td><span class="status purple"></span>review</td>
                              </tr> 
                              <tr>
                                <td>Web Development</td>
                                <td>Frontend team</td>
                                <td><span class="status green"></span>In progress</td>
                              </tr> 
                              <tr>
                                <td>App Development</td>
                                <td>Mobile Team</td>
                                <td><span class="status orange"></span>pending</td>
                              </tr> 
                              <tr>
                                <td>UI/UX Design</td>
                                <td>UI Team</td>
                                <td><span class="status purple"></span>review</td>
                              </tr> 
                              <tr>
                                <td>Web Development</td>
                                <td>Frontend team</td>
                                <td><span class="status green"></span>In progress</td>
                              </tr> 
                              <tr>
                                <td>App Development</td>
                                <td>Mobile Team</td>
                                <td><span class="status orange"></span>pending</td>
                              </tr> 
                              <tr>
                                <td>UI/UX Design</td>
                                <td>UI Team</td>
                                <td><span class="status purple"></span>review</td>
                              </tr> 
                              <tr>
                                <td>Web Development</td>
                                <td>Frontend team</td>
                                <td><span className='h-5 w-5 border-rounded bg-pink'></span>In progress</td>
                              </tr> 
                              <tr>
                                <td>App Development</td>
                                <td>Mobile Team</td>
                                <td><span class="status orange"></span>pending</td>
                              </tr>
                           </tbody>
                        </table>
              </div>
              
            
            </div>
        </div>
       
      </div>
    </div>
);
}

export default App;
