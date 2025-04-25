import Header from "./components/Header";
import Paper from "./components/Paper";
import PostPreview from "./components/PostPreview";
import SquareThumb from "./components/SquareThumb";

export default function App() {
  return (
    <div className="w-full flex items-center justify-center">
      <Paper>
        <Header />
        <div className="w-full pt-8 flex flex-col gap-8">
          <div className="font-extrabold d-respira text-3xl">Featured Works</div>
          <div className="w-full flex flex-row items-center gap-4 justify-evenly">
            <SquareThumb title="Wedding Cake" img="https://plus.unsplash.com/premium_photo-1741194731888-cca7bbc05549?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D" />
            <SquareThumb title="Jellyfish" img="https://images.unsplash.com/photo-1744767968954-f3c06e118437?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <SquareThumb title="Dutch Angle Building" img="https://images.unsplash.com/photo-1744654733851-d9c3276f42b0?q=80&w=3217&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
          <PostPreview img="https://images.unsplash.com/photo-1744473671695-d00cfb151579?q=80&w=3863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <div className="font-extrabold d-respira text-3xl">Recently Published</div>
          <PostPreview img="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <PostPreview img="https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <PostPreview img="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
      </Paper>
    </div>
  )
}
