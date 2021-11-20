import moment from 'moment';

export const getFormattedDateTime = (date: string)=>{
  return moment(date).format('MM/DD/YYYY HH:mm:ss');
}