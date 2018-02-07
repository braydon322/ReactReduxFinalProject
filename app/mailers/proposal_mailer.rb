class ProposalMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.proposal_mailer.new_proposal.subject
  #
  def new_proposal(email)
    @greeting = "Hi,"
    mail to: "#{email}", subject: "Let's work together."
  end
end
