import { ErrorInfoWrapper, ErrorCod, ErrorCity } from "./styles";

interface ErrorInfoProps {
  weatherError?: {
    errorCod: string;
    message: string;
    }
}

function ErrorInfo({weatherError}:ErrorInfoProps) {
  return (
    <ErrorInfoWrapper>
      <ErrorCod>{weatherError?.errorCod}</ErrorCod>
      <ErrorCity>{weatherError?.message}</ErrorCity>
    </ErrorInfoWrapper>
  );
}

export default ErrorInfo;
