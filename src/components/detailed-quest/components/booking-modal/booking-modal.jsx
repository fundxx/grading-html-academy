import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { setOrder } from '../../../../redux/api-actions';
import { connect } from 'react-redux';
import {Legal} from '../../../../assets/const/const';

const BookingModal = (props) => {
  const { onBookingBtnClick, onSetOrder } = props;
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onSetOrder({
      name: evt.target.bookingName.value,
      peopleCount: Number(evt.target.bookingPeople.value),
      phone: evt.target.bookingPhone.value,
      isLegal: evt.target.bookingLegal.value === Legal.ON,
    });
    onBookingBtnClick();
  }
  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onBookingBtnClick}>
          <IconClose width='16' height='16' />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action='https://echo.htmlacademy.ru'
          method='post'
          id='booking-form'
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor='booking-name'>Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type='text'
              id='booking-name'
              name='bookingName'
              placeholder='Имя'
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor='booking-phone'>
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type='tel'
              id='booking-phone'
              name='bookingPhone'
              placeholder='Телефон'
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor='booking-people'>
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type='number'
              id='booking-people'
              name='bookingPeople'
              placeholder='Количество участников'
              required
            />
          </S.BookingField>
          <S.BookingSubmit type='submit'>Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type='checkbox'
              id='booking-legal'
              name='bookingLegal'
              required
            />
            <S.BookingCheckboxLabel
              className='checkbox-label'
              htmlFor='booking-legal'
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href='#'>
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSetOrder(form) {
    dispatch(setOrder(form))
  }
});

export { BookingModal };
export default connect(null, mapDispatchToProps)(BookingModal)
