/**
 * 기본 리스트
 *
 * @interface List
 */
interface List {
	/* id : 아이디 */
	id: string;
	/* title : 제목 */
	title: string;
	/* code : 코드 */
	code: number;
	/* key : 키 */
	key: string;
	/* startDate : 시작날짜 */
	startDate: string;
	/* endDate : 끝날짜 */
	endDate: string;
	/* isActive : 활성여부 */
	isActive: boolean;
}
