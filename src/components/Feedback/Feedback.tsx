import { useDispatch, useSelector } from "react-redux"
import { actions } from "store/redux/feedback/feedbackSlice"
import { feedbackState } from "store/redux/feedback/selectors"

import Button from "components/Button"
import { Like, DisLike } from "assets"
import { FeedbackWrapper, Count, Image, ImageContainer } from "./stylex"

function Feedback() {
  const dispach = useDispatch()
  const counter = useSelector(feedbackState)

  const plusLike = () => {
    dispach(actions.addLike())
  }

  const plusDisLike = () => {
    dispach(actions.addDisLike())
  }

  const resetCounter = () => {
    dispach(actions.resetResults())
  }
  return (
    <FeedbackWrapper>
      <ImageContainer>
        <Image src={DisLike} alt="dislike" onClick={plusDisLike} />
      </ImageContainer>
      <Count>{counter.countDisLike}</Count>
      <ImageContainer>
        <Image src={Like} alt="like" onClick={plusLike} />
      </ImageContainer>
      <Count>{counter.countLike}</Count>
      <Button name="Reset Results" onClick={resetCounter} />
    </FeedbackWrapper>
  )
}

export default Feedback
