// Notifica o dono no WhatsApp a cada novo lead do site.
// Usa a conta de WhatsApp DO DONO (modo owner, $connectors.executeAsOwner).
// O lead já está salvo quando este código roda; qualquer falha aqui só é registrada no log.

onRecordAfterCreateSuccess((e) => {
  e.next()

  try {
    const ownerNumber = '5517997194145'
    const phoneNumberId = $os.getenv('OWNER_WHATSAPP_PHONE_NUMBER_ID')
    if (!phoneNumberId) {
      console.warn('lead notify skipped: OWNER_WHATSAPP_PHONE_NUMBER_ID not set')
      return
    }

    const pad = (n) => (n < 10 ? '0' + n : '' + n)
    // Horário de Brasília (UTC-3)
    const d = new Date(Date.now() - 3 * 60 * 60 * 1000)
    const sentAt =
      pad(d.getUTCDate()) +
      '/' +
      pad(d.getUTCMonth() + 1) +
      '/' +
      d.getUTCFullYear() +
      ' ' +
      pad(d.getUTCHours()) +
      ':' +
      pad(d.getUTCMinutes())

    const name = e.record.getString('name') || '-'
    const phone = e.record.getString('phone') || '-'
    const email = e.record.getString('email') || '-'
    const message = e.record.getString('message') || '-'

    const text =
      '🔔 Novo lead do site\n\n' +
      'Nome: ' +
      name +
      '\n' +
      'WhatsApp: ' +
      phone +
      '\n' +
      'E-mail: ' +
      email +
      '\n' +
      'Empresa/cidade e mensagem: ' +
      message +
      '\n\n' +
      'Enviado em ' +
      sentAt

    const r = $connectors.executeAsOwner('WHATSAPP_SEND_MESSAGE', {
      phone_number_id: phoneNumberId,
      to_number: ownerNumber,
      text: text,
    })
    if (!r.successful) console.warn('lead notify failed', r.error)
  } catch (err) {
    console.warn('lead notify connector call failed', err.status, err.message)
  }
}, 'leads')
