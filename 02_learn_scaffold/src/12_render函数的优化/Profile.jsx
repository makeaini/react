import { memo } from 'react'
//通过memo包上，就是表示，没有更新的，就需要再更新了
const Profile = memo(function(props) {
    console.log('profile');
    return <h2>profile:{props.message}</h2>
})
export default Profile