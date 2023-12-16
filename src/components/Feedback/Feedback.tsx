
import Button from "components/Button"
import { Like, DisLike } from "assets"
import { FeedbackWrapper, Count, Image } from "./stylex"

function Feedback() {
  return (
    <FeedbackWrapper>
      <Image src={DisLike} alt="dislike" />
      <Count>0</Count>
      <Image src={Like} alt="dislike" />
      <Count>0</Count>
      <Button name="Reset Results" />
    </FeedbackWrapper>
  )
}

export default Feedback
