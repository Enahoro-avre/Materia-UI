import { Box } from '@mui/material'
import Post from './Post'

// https://images.pexels.com/photos/1456951/pexels-photo-1456951.jpeg?auto=compress&cs=tinysrgb&w=600
// https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&w=600
// https://media.istockphoto.com/photos/famous-powerful-skogafoss-waterfall-at-south-iceland-picture-id1133155890?b=1&k=20&m=1133155890&s=612x612&w=0&h=7HlgxNFCs_WgZCTp54tdlUPA57zNCuSdbj4sqhLvZYo=


function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed