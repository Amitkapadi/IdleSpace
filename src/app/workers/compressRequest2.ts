class CompressRequest2 {
  constructor(
    public obj: any,
    public zipped: string,
    public compress: boolean,
    public requestId: number
  ) {}
}