import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import moment from 'moment-timezone'

const ptBr = {
  name: 'pt-br',
  config: {
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays:
      'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
    weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
    weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function () {
        return this.day() === 0 || this.day() === 6
          ? '[Último] dddd [às] LT' // Saturday + Sunday
          : '[Última] dddd [às] LT'; // Monday - Friday
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'em %s',
      past: 'há %s',
      s: 'poucos segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    invalidDate: 'Data inválida'
  }
}

export default function App() {

  const [dark, setDark] = useState(false)
  const [selectedDay, setSelectedDay] = useState(moment().tz("America/Sao_Paulo").format())
  console.log(selectedDay)

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container0}>
        <CalendarStrip
          scrollable
          locale={ptBr}
          selectedDate={selectedDay}
          onDateSelected={date => setSelectedDay(date.subtract(12, 'h'))}
          style={{
            height:180,
            paddingTop: 30,
            paddingBottom: 10
          }}
          calendarColor={dark ? '#001122' : '#3343CE'}
          calendarHeaderStyle={{
            color: 'white',
            fontSize: 15
          }}
          dateNumberStyle={{
            color: 'white',
            fontSize: 14
          }}
          dateNameStyle={{
            color: 'white',
            fontSize: 14
          }}
          iconContainer={{flex: 0.1}}
          daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
        />

        <TouchableOpacity onPress={() => setDark(!dark)}>
          <Text>Dark</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container0: {
    flex: 1
  }
})
