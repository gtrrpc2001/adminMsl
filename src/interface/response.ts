export default interface APIResponse<T> {
    statusCode: number; // 상태코드 (보인 서버상태코드)
    errorCode: number; // 에러코드 (본인 서버에러코드)
    message: string; // 메시지
    result: T; // 데이터 내용
    timestamp: Date; // 시간
}

export interface GraphQLRequest {
    query: string;
    variables?: Record<string, any>;
}